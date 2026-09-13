GOLDEN COURTYARD LANDSCAPING AND ROOFING — PHOTO + VIDEO GALLERY TEMPLATE

This version supports unlimited photos AND videos in both:
- Landscaping
- Roofing

HOW TO ADD A PHOTO

1. Put the photo inside the images folder.
2. Open gallery.js.
3. Add a line like:

{ type: "image", file: "landscaping-7.jpg" }

or:

{ type: "image", file: "roofing-7.jpg" }


HOW TO ADD A VIDEO

1. Put the video inside the images folder.
2. MP4 is recommended for best browser compatibility.
3. Open gallery.js.
4. Add a line like:

{ type: "video", file: "landscaping-video-1.mp4" }

or:

{ type: "video", file: "roofing-video-1.mp4" }


OPTIONAL VIDEO COVER IMAGE

You can give a video a custom cover image:

{ type: "video", file: "landscaping-video-1.mp4", poster: "landscaping-video-1-cover.jpg" }

Put both the video and cover image inside the images folder.

You can keep adding as many photos and videos as you want.

TIPS FOR VIDEOS

- Use MP4 format when possible.
- Compress large phone videos before uploading.
- Short project clips usually work better than very long videos.
- Videos use native browser controls for play, pause, volume, and fullscreen.


GALLERY LAYOUT:
- Desktop: 5 photos/videos per row
- Medium screens: 3 per row
- Mobile: 2 per row


UPDATED GALLERY BEHAVIOR:
- 5 photos/videos per row on ALL devices, including phones.
- On smaller screens, each thumbnail is intentionally compact.
- Tap/click any photo or video to open it in a large full-screen viewer.
- Tap outside the enlarged media, press X, or press Escape to close it.


MEDIA PRIVACY / PROTECTION

This template now:
- Opens photos/videos in the enlarged viewer using the original uploaded web file.
- Disables right-click on gallery media.
- Disables image dragging.
- Hides the standard video download control where the browser supports it.
- Disables Picture-in-Picture for gallery videos where supported.
- Blocks common Save / View Source keyboard shortcuts while the media viewer is open.

IMPORTANT:
These measures deter casual downloading but cannot completely prevent saving,
screenshots, developer-tools access, or network capture. Any media a browser can
display must be delivered to that browser.

BEST PRACTICE:
Do not upload your true camera originals. Use metadata-stripped, high-resolution
web copies instead. Keep the original files private.
