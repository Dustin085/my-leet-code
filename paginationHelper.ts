// https://www.codewars.com/kata/515bb423de843ea99400000a/train/typescript

export class PaginationHelper {
    private collection: unknown[];
    private itemsPerPage: number;
    private numOfPages: number;

    /**
     * PaginationHelper constructor.
     * @param collection - Array that including every items.
     * @param itemsPerPage - Item per page.
     */
    public constructor(collection: unknown[], itemsPerPage: number) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.numOfPages = Math.ceil(this.collection.length / this.itemsPerPage);
    }

    /**
     * Returns the number of items within the entire collection.
     * @returns Number of items within the entire collection.
     */
    public itemCount(): number {
        return this.collection.length;
    }

    /**
     * Returns the number of pages.
     * @returns The number of pages.
     */
    public pageCount(): number {
        return this.numOfPages;
    }

    /**
     * Returns the number of items on the current page. page_index is zero based.
     * @param pageIndex Page index of queried page.
     * @returns The number of items on the pageIndex page, return -1 if pageIndex is an invalid number.
     */
    public pageItemCount(pageIndex: number): number {
        // if pageIndex is invalid ...
        if (pageIndex < 0 || pageIndex > this.numOfPages - 1 || !Number.isInteger(pageIndex)) { return -1 };

        // if index is the last page ...
        if (pageIndex === this.numOfPages - 1 && this.collection.length % this.itemsPerPage !== 0) { return this.collection.length % this.itemsPerPage };

        // Number of items on pages other than last page equal to this.itemsPerPage.
        return this.itemsPerPage;

    }

    /**
     * Determines what page an item is on. Zero based indexes.
     * @param itemIndex Item index.
     * @returns Page index of item that indicated by `itemIndex`.
     */
    public pageIndex(itemIndex: number): number {
        // if itemIndex is invalid ...
        if (itemIndex < 0 || itemIndex > this.collection.length - 1 || !Number.isInteger(itemIndex)) { return -1 };

        // return Math.ceil(itemIndex + 1 / this.itemsPerPage) - 1;
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}