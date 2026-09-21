/**
 * Minimal layout functions for rendering base components
 * These provide a cleaner, simpler layout alternative
 */

export const italicLayout = (data: { content: string }): string => {
  return `<em>${data.content}</em>`;
};

export const linkLayout = (data: { href: string; content: string }): string => {
  return `<a href="${data.href}">${data.content}</a>`;
};

export const listLayout = (data: { content: string }): string => {
  return `<ul>${data.content}</ul>`;
};

export const listItemLayout = (data: { content: string }): string => {
  return `<li>${data.content}</li>`;
};

export const paragraphLayout = (data: { content: string }): string => {
  return `<p>${data.content}</p>`;
};

export const strongLayout = (data: { content: string }): string => {
  return `<b>${data.content}</b>`;
};

export const imageLayout = (data: { src: string; altText: string }): string => {
  return `<img src="${data.src}" alt="${data.altText}" />`;
};

export const headingLayout = (data: { content: string }): string => {
  return `<h3>${data.content}</h3>`;
};
