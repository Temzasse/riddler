export function hashCode(s: string) {
  return s
    .split("")
    .reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0)
    .toString();
}

export function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const id = hashCode(url);

    if (!document.getElementById(id)) {
      var link = document.createElement("link");
      link.id = id;
      link.rel = "preload";
      link.as = "image";
      link.href = url;
      document.head.appendChild(link);
    }
  });
}

export function getRandomFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
