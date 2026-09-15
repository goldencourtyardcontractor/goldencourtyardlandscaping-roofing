// Add as many photos and videos as you want.
// Put all media files inside the "images" folder.
//
// Supported examples:
// { type: "image", file: "landscaping-1.jpg" }
// { type: "video", file: "landscaping-video-1.mp4", poster: "landscaping-video-1-cover.jpg" }
//
// The "poster" image for videos is optional.

const landscapingMedia = [
  { type: "image", file: "landscaping-01.jpg" },
  { type: "image", file: "landscaping-02.jpg" },
  { type: "image", file: "landscaping-03.jpg" },
  { type: "image", file: "landscaping-04.jpg" },
  { type: "image", file: "landscaping-05.jpg" },
  { type: "image", file: "landscaping-06.jpg" },
  { type: "image", file: "landscaping-07.jpg" },
  { type: "image", file: "landscaping-08.jpg" },
  { type: "image", file: "landscaping-09.jpg" },
  { type: "image", file: "landscaping-10.jpg" },
  { type: "image", file: "landscaping-11.jpg" },
  { type: "image", file: "landscaping-12.jpg" },
  { type: "image", file: "landscaping-13.jpg" },
  { type: "image", file: "landscaping-14.jpg" },
  { type: "image", file: "landscaping-15.jpg" },
  { type: "image", file: "landscaping-17.jpg" },
  { type: "image", file: "landscaping-16.jpg" },
  { type: "image", file: "landscaping-18.jpg" },
  { type: "image", file: "landscaping-19.jpg" },
  { type: "image", file: "landscaping-20.jpg" },
  { type: "image", file: "landscaping-21.jpg" },
  { type: "image", file: "landscaping-22.jpg" },
  { type: "image", file: "landscaping-23.jpg" },
  { type: "image", file: "landscaping-24.png" },
  { type: "image", file: "landscaping-25.jpg" },
  { type: "image", file: "landscaping-26.jpg" },
  { type: "image", file: "landscaping-27.jpg" },
  { type: "image", file: "landscaping-29.jpg" },
  { type: "image", file: "landscaping-28.jpg" },
  { type: "image", file: "landscaping-30.jpg" },
  { type: "image", file: "landscaping-31.jpg" },
  { type: "image", file: "landscaping-32.jpg" },
  { type: "image", file: "landscaping-33.jpg" },
  { type: "image", file: "landscaping-34.jpg" },
  { type: "image", file: "landscaping-35.jpg" },
  { type: "image", file: "landscaping-36.jpg" },
  { type: "image", file: "landscaping-37.jpg" },
  { type: "video", file: "landscaping-video-01.mp4" },
  { type: "image", file: "landscaping-38.jpg" },
  { type: "image", file: "landscaping-39.jpg" },
  { type: "image", file: "landscaping-40.jpg" },
  { type: "image", file: "landscaping-41.jpg" },
  { type: "image", file: "landscaping-42.jpg" },
  { type: "image", file: "landscaping-43.jpg" },
  { type: "image", file: "landscaping-44.jpg" },
  { type: "image", file: "landscaping-45.jpg" },
  { type: "image", file: "landscaping-46.jpg" },
  { type: "image", file: "landscaping-47.jpg" },
  { type: "image", file: "landscaping-48.jpg" },
  { type: "image", file: "landscaping-49.jpg" },
  { type: "image", file: "landscaping-50.jpg" },
  { type: "image", file: "landscaping-51.jpg" },
  { type: "image", file: "landscaping-52.jpg" },
  { type: "image", file: "landscaping-53.jpg" },
  { type: "image", file: "landscaping-54.jpg" },
  { type: "image", file: "landscaping-55.jpg" },
  { type: "image", file: "landscaping-56.jpg" },
  { type: "image", file: "landscaping-57.jpg" },
  { type: "image", file: "landscaping-58.jpg" },
  { type: "image", file: "landscaping-59.jpg" },
  { type: "image", file: "landscaping-60.jpg" },
  { type: "image", file: "landscaping-61.jpg" },
  { type: "image", file: "landscaping-80.jpg" },
  { type: "image", file: "landscaping-62.jpg" },
  { type: "image", file: "landscaping-63.jpg" },
  { type: "image", file: "landscaping-64.jpg" },
  { type: "image", file: "landscaping-65.jpg" },
  { type: "image", file: "landscaping-66.jpg" },
  { type: "image", file: "landscaping-67.jpg" },
  { type: "image", file: "landscaping-68.jpg" },
  { type: "image", file: "landscaping-69.jpg" },
  { type: "image", file: "landscaping-70.jpg" },
  { type: "image", file: "landscaping-72.jpg" },
  { type: "image", file: "landscaping-73.jpg" },
  { type: "image", file: "landscaping-74.jpg" },
  { type: "image", file: "landscaping-75.jpg" },
  { type: "image", file: "landscaping-76.jpg" },
  { type: "image", file: "landscaping-77.jpg" },
  { type: "image", file: "landscaping-78.jpg" },
  { type: "image", file: "landscaping-79.jpg" },
  { type: "image", file: "landscaping-81.jpg" },
  { type: "video", file: "landscaping-video-02.MOV" },
  { type: "video", file: "landscaping-video-03.MOV" },
  { type: "image", file: "landscaping-82.jpg" },
  { type: "image", file: "landscaping-83.jpg" },
  { type: "video", file: "landscaping-video-04.mov" },
  { type: "image", file: "landscaping-84.jpg" },
  { type: "image", file: "landscaping-85.jpg" },
  { type: "image", file: "landscaping-86.jpg" },
  { type: "image", file: "landscaping-87.jpg" },
  { type: "video", file: "landscaping-video-12.mp4" },
  { type: "image", file: "landscaping-88.jpg" },
  { type: "image", file: "landscaping-89.jpg" },
  { type: "image", file: "landscaping-90.jpg" },
  { type: "image", file: "landscaping-91.jpg" },
  { type: "video", file: "landscaping-video-05.mp4" },
  { type: "video", file: "landscaping-video-06.mp4" },
  { type: "image", file: "landscaping-92.jpg" },
  { type: "image", file: "landscaping-93.jpg" },
  { type: "image", file: "landscaping-94.jpg" },
  { type: "image", file: "landscaping-95.jpg" },
  { type: "image", file: "landscaping-96.jpg" },
  { type: "image", file: "landscaping-97.jpg" },
  { type: "image", file: "landscaping-98.jpg" },
  { type: "image", file: "landscaping-99.jpg" },
  { type: "image", file: "landscaping-100.jpg" },
  { type: "image", file: "landscaping-101.jpg" },
  { type: "video", file: "landscaping-video-07.mp4" },
  { type: "video", file: "landscaping-video-08.mp4" },
  { type: "video", file: "landscaping-video-09.mp4" },
  { type: "video", file: "landscaping-video-10.mp4" },
  { type: "video", file: "landscaping-video-11.mp4" },
  { type: "image", file: "landscaping-102.jpg" },
  { type: "image", file: "landscaping-103.jpg" },
  { type: "image", file: "landscaping-104.jpg" },
  { type: "video", file: "landscaping-video-13.mp4" },
  { type: "image", file: "landscaping-105.jpg" },
  { type: "image", file: "landscaping-106.jpg" },
  { type: "video", file: "landscaping-video-14.mp4" },
  { type: "image", file: "landscaping-107.jpg" },
  { type: "video", file: "landscaping-video-15.mp4" },
  { type: "video", file: "landscaping-video-16.MOV" },
  { type: "video", file: "landscaping-video-17.MOV" },
  { type: "video", file: "landscaping-video-18.mp4" },
  { type: "video", file: "landscaping-video-19.MOV" },
  { type: "video", file: "landscaping-video-20.mp4" },
  { type: "image", file: "landscaping-108.jpg" },
  { type: "image", file: "landscaping-109.jpg" },
  { type: "video", file: "landscaping-video-21.mp4" },
  { type: "image", file: "landscaping-110.jpg" },
  { type: "image", file: "landscaping-111.jpg" },
  { type: "image", file: "landscaping-112.jpg" },
  { type: "image", file: "landscaping-113.jpg" },
  { type: "image", file: "landscaping-114.jpg" },
  { type: "image", file: "landscaping-115.jpg" },
  { type: "image", file: "landscaping-116.jpg" },
  { type: "image", file: "landscaping-117.jpg" },
  { type: "image", file: "landscaping-118.jpg" },
  { type: "image", file: "landscaping-119.jpg" },
  { type: "image", file: "landscaping-120.jpg" }
];

const roofingMedia = [
  { type: "video", file: "roofing-video-1.mp4" },
  { type: "video", file: "roofing-video-2.mp4" },
  { type: "video", file: "roofing-video-3.mp4" },
  { type: "video", file: "roofing-video-4.mp4" },
  { type: "video", file: "roofing-video-5.mp4" },
  { type: "image", file: "roofing-01.jpg" },
  { type: "image", file: "roofing-02.jpg" },
  { type: "video", file: "roofing-video-6.mp4" },
  { type: "image", file: "roofing-03.jpg" },
  { type: "image", file: "roofing-04.jpg" },
  { type: "image", file: "roofing-05.webp" },
  { type: "image", file: "roofing-06.webp" },
  { type: "image", file: "roofing-07.jpeg" },
  { type: "video", file: "roofing-video-7.mp4" },
  { type: "video", file: "roofing-add-01.mp4" },
  { type: "image", file: "roofing-add-02.jpg" },
  { type: "image", file: "roofing-add-03.jpg" },
  { type: "image", file: "roofing-add-04.jpg" },
  { type: "video", file: "roofing-add-05.mov" },
  { type: "video", file: "roofing-add-06.mov" },
  { type: "image", file: "roofing-add-07.jpg" },
  { type: "image", file: "roofing-add-08.jpg" },
  { type: "image", file: "roofing-add-09.jpg" },
  { type: "image", file: "roofing-add-10.jpg" },
  { type: "video", file: "roofing-add-11.mp4" },
  { type: "video", file: "roofing-add-12.mp4" },
  { type: "video", file: "roofing-add-13.mp4" },
  { type: "video", file: "roofing-add-14.mp4" },
  { type: "image", file: "roofing-add-15.jpg" },
  { type: "image", file: "roofing-add-16.jpg" },
  { type: "image", file: "roofing-add-17.jpg" },
  { type: "image", file: "roofing-add-18.jpg" },
  { type: "image", file: "roofing-add-19.jpg" },
  { type: "video", file: "roofing-add-20.mov" },
  { type: "image", file: "roofing-add-21.jpg" },
  { type: "image", file: "roofing-add-22.jpg" },
  { type: "image", file: "roofing-add-23.jpg" },
  { type: "image", file: "roofing-add-24.jpg" },
  { type: "image", file: "roofing-add-25.jpg" },
  { type: "image", file: "roofing-add-26.jpg" },
  { type: "image", file: "roofing-add-27.jpg" },
  { type: "image", file: "roofing-add-28.jpg" },
  { type: "video", file: "roofing-add-29.mp4" },
  { type: "video", file: "roofing-add-30.mp4" },
  { type: "video", file: "roofing-add-31.mov" }
];

function loadMediaGallery(containerId, mediaItems, altText) {
  const container = document.getElementById(containerId);

  mediaItems.forEach((item) => {
    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = `images/${item.file}`;
      video.controls = true;
      video.setAttribute("controlsList", "nodownload noremoteplayback");
      video.setAttribute("disablePictureInPicture", "");
      video.preload = "metadata";
      video.playsInline = true;
      if (item.poster) {
        video.poster = `images/${item.poster}`;
      }
      container.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = `images/${item.file}`;
      img.alt = altText;
      img.loading = "lazy";
      container.appendChild(img);
    }
  });
}

loadMediaGallery("landscaping-gallery", landscapingMedia, "Landscaping project");
loadMediaGallery("roofing-gallery", roofingMedia, "Roofing project");


// Click-to-enlarge viewer for both photos and videos
const lightbox = document.getElementById("media-lightbox");
const closeButton = lightbox.querySelector(".media-lightbox-close");

function closeLightbox() {
  const active = lightbox.querySelector(".media-lightbox-content");
  if (active && active.tagName === "VIDEO") {
    active.pause();
  }
  if (active) active.remove();
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

function openLightbox(element) {
  const clone = element.cloneNode(true);
  clone.classList.add("media-lightbox-content");
  clone.removeAttribute("loading");

  if (clone.tagName === "VIDEO") {
    clone.controls = true;
    clone.setAttribute("controlsList", "nodownload noremoteplayback");
    clone.setAttribute("disablePictureInPicture", "");
    clone.autoplay = true;
    clone.playsInline = true;
  }

  lightbox.appendChild(clone);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

document.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery img, .gallery video");
  if (item) {
    event.preventDefault();
    openLightbox(item);
  }
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});


// Basic media protection / deterrence.
// Note: no browser-based method can fully prevent a determined user from saving
// media that their browser is able to display.

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".gallery img, .gallery video, .media-lightbox")) {
    event.preventDefault();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target.closest(".gallery img, .gallery video, .media-lightbox img, .media-lightbox video")) {
    event.preventDefault();
  }
});

// Prevent common save shortcuts while the enlarged viewer is open.
document.addEventListener("keydown", (event) => {
  const lightboxOpen = document.querySelector(".media-lightbox.open");
  if (!lightboxOpen) return;

  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && (key === "s" || key === "u")) {
    event.preventDefault();
  }
});

// Add browser hints to hide video download / remote playback controls where supported.
function applyVideoProtection(video) {
  video.setAttribute("controlsList", "nodownload noremoteplayback");
  video.setAttribute("disablePictureInPicture", "");
  video.setAttribute("playsinline", "");
}

document.querySelectorAll(".gallery video").forEach(applyVideoProtection);

// Observe dynamically-added gallery videos.
const galleryObserver = new MutationObserver(() => {
  document.querySelectorAll(".gallery video").forEach(applyVideoProtection);
});
galleryObserver.observe(document.body, { childList: true, subtree: true });
