export function createBlogItem(itemData) {
    const blogList = document.getElementById("blog-list");
    const blogElement = blogList.contentEditable.firstElementChild.cloneNode(true);
    const blogItem = blogElement.firstElementChild;
    console.log(blogItem);
}