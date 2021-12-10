// check if the browser supports serviceWorker at all
window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.register("/decidim-packs/service-worker.js");
    const permission = await window.Notification.requestPermission();

    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }

    // do stuff
  } else {
    console.log("Your browser doesn't support service workers 🤷‍♀️");
  }
});
