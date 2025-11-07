/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://fastprintdelhi.com';

const pages = [
  { path: '/', priority: 1.0, changefreq: 'daily', image: '/Images/ab1 1.png' },
  { path: '/aboutUs', priority: 0.8, changefreq: 'monthly', image: '/Images/aboutUsBg.jpg' },
  { path: '/flexPrinting', priority: 0.9, changefreq: 'weekly', image: '/Images/flexPrint.jpg' },
  { path: '/tshirtPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/tshirtbg.jpg' },
  { path: '/mugPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/mugPrintingBg.jpg' },
  { path: '/vinylPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/vinaylPrint.png' },
  { path: '/hordingPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/hordingDesign.jpg' },
  { path: '/broucrePrint', priority: 0.9, changefreq: 'weekly', image: '/Images/broucrePrint.jpg' },
  { path: '/standeePrint', priority: 0.9, changefreq: 'weekly', image: '/Images/standeeprintBg.jpg' },
  { path: '/canopy', priority: 0.9, changefreq: 'weekly', image: '/Images/canopyBg.jpg' },
  { path: '/pamphletPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/pumplateBg.jpg' },
  { path: '/letterheadPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/letterheadBg.jpg' },
  { path: '/diaryPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/pumplateBg.jpg' },
  { path: '/visitingCard', priority: 0.9, changefreq: 'weekly', image: '/Images/broucrePrint.jpg' },
  { path: '/sunBoardPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/sunboardCutoutBg.jpg' },
  { path: '/calenderPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/calenderPrintBg.jpg' },
  { path: '/folderPrint', priority: 0.9, changefreq: 'weekly', image: '/Images/folderPrintBg.jpg' },
  { path: '/contactUs', priority: 0.8, changefreq: 'monthly', image: '/Images/aboutUsBg.jpg' }
];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  },
  exclude: ['/404', '/500'],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    return pages.map((page) => ({
      loc: page.path,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
      ...(page.image && {
        news: `
          <image:image>
            <image:loc>${config.siteUrl}${page.image}</image:loc>
            <image:title>Fast Print Delhi - ${page.path.replace('/', '') || 'Home'}</image:title>
          </image:image>
        `
      })
    }));
  }
};
