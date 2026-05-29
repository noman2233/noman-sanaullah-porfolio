// src/app/sitemap.js or app/sitemap.js

// 1. Import your projects array from its file path
// Update the path '../data/projects' to point exactly to wherever that file is stored

export default async function sitemap() {
  const baseUrl = "https://nomansanaullah.vercel.app";

  // 2. Automatically map over the array using the 'slug' key
  const projectUrls = project.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Combine with your static home page route
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...projectUrls,
  ];
}