const tabCloseDelay = 5000;
const isZoomTab = tab => tab.url.match(/^https:\/\/.+\.zoom\.us\/[a-z]\/.*/i) != null;
const closeTab = tab => chrome.tabs.remove(tab.id);

const onTabUpdated = (_, __, tab) => {
  if (!isZoomTab(tab)) return;

  console.log(`Found zoom meeting tab, closing in ${tabCloseDelay}ms`, tab.url);
  setTimeout(() => closeTab(tab), tabCloseDelay);
};

const main = () => {
  console.log('Service worker registered');
  chrome.tabs.onUpdated.addListener(onTabUpdated);
};

main();
