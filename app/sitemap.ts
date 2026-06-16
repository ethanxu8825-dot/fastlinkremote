import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fastlinkremote.com",
    },
    {
       url: "https://fastlinkremote.com/zh",
       lastModified: new Date(),
    }
    {
      url: "https://fastlinkremote.com/services",
    },
    {
      url: "https://fastlinkremote.com/coverage",
    },
    {
      url: "https://fastlinkremote.com/contact",
    },
    {
      url: "https://fastlinkremote.com/faq",
    },
    {
      url: "https://fastlinkremote.com/blog",
    },
    {
      url: "https://fastlinkremote.com/blog/HTFRMT",
    },
    {
      url: "https://fastlinkremote.com/blog/remote-hands-vs-smart-hands",
    },
    {
      url: "https://fastlinkremote.com/blog/gpu-deployment-best-practices",
    },
    {
      url: "https://fastlinkremote.com/blog/receiving-shipping-checklist",
    },
    {
      url: "https://fastlinkremote.com/blog/choosing-remote-hands-provider",
    },
  ];
}