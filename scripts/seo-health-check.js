const fs = require('fs');
const path = require('path');

/**
 * SEO Health Check Script
 * Checks for common SEO issues in the React codebase
 */

const srcPath = path.join(__dirname, '../src');
const publicPath = path.join(__dirname, '../public');

let issues = [];
let warnings = [];
let successes = [];

// Color codes for terminal output
const colors = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[36m',
  reset: '\x1b[0m'
};

// Check if file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Read file content
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

// Check for missing alt tags in JSX files
function checkAltTags() {
  console.log('\n🔍 Checking for images without alt tags...');
  
  const findImages = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.includes('node_modules')) {
        findImages(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
        const content = readFile(filePath);
        if (content) {
          // Check for <img> tags without alt or with empty alt
          const imgMatches = content.match(/<img[^>]*>/g);
          if (imgMatches) {
            imgMatches.forEach(img => {
              if (!img.includes('alt=') || img.includes('alt=""') || img.includes("alt=''")) {
                warnings.push(`Missing or empty alt tag in ${filePath}`);
              }
            });
          }
          
          // Check for OptimizedImage without alt
          const optimizedImgMatches = content.match(/<OptimizedImage[^>]*>/g);
          if (optimizedImgMatches) {
            optimizedImgMatches.forEach(img => {
              if (!img.includes('alt=') || img.includes('alt=""') || img.includes("alt=''")) {
                warnings.push(`Missing or empty alt tag in OptimizedImage at ${filePath}`);
              }
            });
          }
        }
      }
    });
  };
  
  findImages(srcPath);
}

// Check for essential SEO files
function checkEssentialFiles() {
  console.log('\n📋 Checking for essential SEO files...');
  
  const essentialFiles = [
    { path: path.join(publicPath, 'robots.txt'), name: 'robots.txt' },
    { path: path.join(publicPath, 'sitemap.xml'), name: 'sitemap.xml' },
    { path: path.join(publicPath, 'manifest.json'), name: 'manifest.json' },
    { path: path.join(srcPath, 'components/SEO/SEO.js'), name: 'SEO Component' },
    { path: path.join(srcPath, 'components/SEO/structuredData.js'), name: 'Structured Data' }
  ];
  
  essentialFiles.forEach(file => {
    if (fileExists(file.path)) {
      successes.push(`✓ ${file.name} exists`);
    } else {
      issues.push(`✗ Missing ${file.name} at ${file.path}`);
    }
  });
}

// Check meta tags in index.html
function checkMetaTags() {
  console.log('\n🏷️  Checking meta tags in index.html...');
  
  const indexPath = path.join(publicPath, 'index.html');
  const content = readFile(indexPath);
  
  if (content) {
    const requiredMetaTags = [
      { tag: 'description', regex: /<meta\s+name=["']description["']/i },
      { tag: 'keywords', regex: /<meta\s+name=["']keywords["']/i },
      { tag: 'og:title', regex: /<meta\s+property=["']og:title["']/i },
      { tag: 'og:description', regex: /<meta\s+property=["']og:description["']/i },
      { tag: 'og:image', regex: /<meta\s+property=["']og:image["']/i },
      { tag: 'twitter:card', regex: /<meta\s+name=["']twitter:card["']/i },
      { tag: 'canonical', regex: /<link\s+rel=["']canonical["']/i }
    ];
    
    requiredMetaTags.forEach(meta => {
      if (meta.regex.test(content)) {
        successes.push(`✓ ${meta.tag} meta tag found`);
      } else {
        issues.push(`✗ Missing ${meta.tag} meta tag in index.html`);
      }
    });
  } else {
    issues.push('✗ Cannot read index.html');
  }
}

// Check for SEO component usage in pages
function checkSEOComponentUsage() {
  console.log('\n🔌 Checking SEO component usage in pages...');
  
  const pagesPath = path.join(srcPath, 'pages');
  
  if (fileExists(pagesPath)) {
    const pages = fs.readdirSync(pagesPath);
    
    pages.forEach(page => {
      if (page.endsWith('.js') || page.endsWith('.jsx')) {
        const content = readFile(path.join(pagesPath, page));
        if (content) {
          if (content.includes('import SEO') && content.includes('<SEO')) {
            successes.push(`✓ ${page} uses SEO component`);
          } else {
            warnings.push(`⚠ ${page} may be missing SEO component`);
          }
        }
      }
    });
  }
}

// Check sitemap validity
function checkSitemap() {
  console.log('\n🗺️  Checking sitemap.xml...');
  
  const sitemapPath = path.join(publicPath, 'sitemap.xml');
  const content = readFile(sitemapPath);
  
  if (content) {
    const urlCount = (content.match(/<url>/g) || []).length;
    
    if (urlCount > 0) {
      successes.push(`✓ Sitemap contains ${urlCount} URLs`);
      
      // Check if sitemap includes essential pages
      if (content.includes('<loc>https://www.sanmetal.com.tn</loc>')) {
        successes.push('✓ Homepage in sitemap');
      } else {
        warnings.push('⚠ Homepage not found in sitemap');
      }
      
      if (content.includes('/about</loc>')) {
        successes.push('✓ About page in sitemap');
      }
      
      if (content.includes('/services</loc>')) {
        successes.push('✓ Services page in sitemap');
      }
    } else {
      issues.push('✗ Sitemap appears to be empty');
    }
  } else {
    issues.push('✗ Cannot read sitemap.xml');
  }
}

// Generate report
function generateReport() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 SEO HEALTH CHECK REPORT');
  console.log('='.repeat(60));
  
  if (successes.length > 0) {
    console.log(`\n${colors.green}✅ SUCCESSES (${successes.length}):${colors.reset}`);
    successes.forEach(success => console.log(`  ${colors.green}${success}${colors.reset}`));
  }
  
  if (warnings.length > 0) {
    console.log(`\n${colors.yellow}⚠️  WARNINGS (${warnings.length}):${colors.reset}`);
    warnings.forEach(warning => console.log(`  ${colors.yellow}${warning}${colors.reset}`));
  }
  
  if (issues.length > 0) {
    console.log(`\n${colors.red}❌ ISSUES (${issues.length}):${colors.reset}`);
    issues.forEach(issue => console.log(`  ${colors.red}${issue}${colors.reset}`));
  }
  
  console.log('\n' + '='.repeat(60));
  
  // Calculate health score
  const totalChecks = successes.length + warnings.length + issues.length;
  const score = totalChecks > 0 ? Math.round((successes.length / totalChecks) * 100) : 0;
  
  let scoreColor = colors.red;
  if (score >= 80) scoreColor = colors.green;
  else if (score >= 60) scoreColor = colors.yellow;
  
  console.log(`\n${scoreColor}📈 SEO Health Score: ${score}%${colors.reset}`);
  
  if (score >= 90) {
    console.log(`${colors.green}🎉 Excellent! Your SEO is in great shape!${colors.reset}`);
  } else if (score >= 70) {
    console.log(`${colors.yellow}👍 Good! Consider addressing the warnings.${colors.reset}`);
  } else {
    console.log(`${colors.red}⚠️  Needs improvement. Please fix the issues above.${colors.reset}`);
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
}

// Run all checks
function runHealthCheck() {
  console.log(`${colors.blue}🔍 Running SEO Health Check...${colors.reset}`);
  
  checkEssentialFiles();
  checkMetaTags();
  checkSitemap();
  checkSEOComponentUsage();
  checkAltTags();
  
  generateReport();
}

// Execute
runHealthCheck();
