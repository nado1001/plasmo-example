import myPanelHTML from "url:~/devtools/panel.html"

chrome.devtools.panels.create("My Panel", "", myPanelHTML, (panel) => {
  panel.onShown.addListener((panelWindow) => {
    let reqElem = ``

    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const { url, method, headers } = request.request
      const { status } = request.response

      reqElem += `
        <div class="request" style="margin-top: 20px;">
          <div class="request__url">${url}</div>
          <div class="request__method">${method}</div>
          <div class="request__status">${status}</div>
          <div class="request__headers">${JSON.stringify(headers)}</div>
        </div>
      `

      panelWindow.document.getElementById("panel").innerHTML = `
        <div class="requests">
          ${reqElem}
        </div>
      `
    })
  })
})

function IndexDevtools() {
  return <></>
}

export default IndexDevtools
