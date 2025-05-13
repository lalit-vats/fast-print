// next-sitemap.config.js

const siteUrl = 'https://fastprintdelhi.com';

const pages = [
  { path: '/', image: '/public/Images/images/ab1 1.png' },
  { path: '/aboutUs', image: '/public/Images/aboutUsBg.jpg' },
  { path: '/flexPrinting', image: '/public/Images/flexPrint.jpg' },
  { path: '/tshirtPrint', image: '/images/tshirtbg.jpg' },
  { path: '/mugPrint', image: '/public/Images/mugPrintingBg.jpg' },
  { path: '/vinylPrint', image: '/public/Images/vinaylPrint.png'},
  { path: '/hordingPrint', image: '/public/Images/hordingDesign.jpg' },
  { path: '/broucrePrint', image: '/public/Images/broucrePrint.jpg' },
  { path: '/standeePrint', image: '/public/Images/standeeprintBg.jpg' },
  { path: '/canopy', image: '/public/Images/canopyBg.jpg' },
  { path: '/pamphletPrint', image: '/public/Images/pumplateBg.jpg' },
  { path: '/letterheadPrint', image: '/public/Images/letterheadBg.jpg' },
  { path: '/diaryPrint', image: '/public/Images/pumplateBg.jpg' },
  { path: '/visitingCard', image: 'public/Images/broucrePrint.jpg' },
  { path: '/sunBoardPrint', image: '/public/Images/sunboardCutoutBg.jpg' },
  { path: '/calenderPrint', image: '/public/Images/calenderPrintBg.jpg' },
  { path: '/folderPrint', image: '/public/Images/calenderPrintBg.jpg' },
  { path: '/contactUs', image: 'public/Images/aboutUsBg.jpg' },
];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,

  additionalPaths: async () => {
    return pages.map((page) => ({
      loc: `${siteUrl}${page.path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
      images: page.image
        ? [
            {
              loc: `${siteUrl}${page.image}`,
              title: `Printing - ${page.path.replace('/', '') || 'home'}`,
              caption: `Explore our ${page.path.replace('/', '') || 'home'} services`,
            },
          ]
        : [],
    }));
  },
};
