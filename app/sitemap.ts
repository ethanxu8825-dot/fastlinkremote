import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [

    // English

    {
      url: "https://fastlinkremote.com",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/services",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/coverage",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/contact",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/faq",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/blog",
      lastModified: new Date(),
    },

    // Chinese

    {
      url: "https://fastlinkremote.com/zh",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/zh/services",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/zh/coverage",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/zh/contact",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/zh/faq",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/zh/blog",
      lastModified: new Date(),
    },

    // English Blog

    {
      url: "https://fastlinkremote.com/blog/HTFRMT",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/blog/remote-hands-vs-smart-hands",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/blog/gpu-deployment-best-practices",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/blog/receiving-shipping-checklist",
      lastModified: new Date(),
    },

    {
      url: "https://fastlinkremote.com/blog/choosing-remote-hands-provider",
      lastModified: new Date(),
    },

  ];
}