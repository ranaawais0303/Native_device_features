const GOOGLE_API_KEY = "AIzaSyCwBy1QqTHks54k23oKZHtVcG0PvO4KGLQ";
export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}
&key=${GOOGLE_API_KEY}
`;
  return imagePreviewUrl;
}
// &signature=YOUR_SIGNATURE after the key if needed
