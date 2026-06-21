import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/blog",
        format: "mdx",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")}-${Date.now()}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            label: "Description",
            name: "description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            label: "Language",
            name: "lang",
            required: true,
            options: [
              { label: "Português", value: "pt" },
              { label: "English", value: "en" },
            ],
          },
          {
            type: "datetime",
            label: "Published Date",
            name: "date",
            required: true,
          },
          {
            type: "string",
            label: "Author",
            name: "author",
            required: true,
          },
          {
            type: "image",
            label: "Cover Image",
            name: "coverImage",
          },
          {
            type: "string",
            label: "Tags",
            name: "tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "boolean",
            label: "Published",
            name: "published",
            required: true,
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
