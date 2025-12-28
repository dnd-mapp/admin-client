import { ComponentHarness } from '@angular/cdk/testing';

export class RootHarness extends ComponentHarness {
    public static readonly hostSelector = 'dma-root';

    private readonly headingLocator = this.locatorFor('h1');

    public async getHeadingContent() {
        return await (await this.headingLocator()).text();
    }
}
