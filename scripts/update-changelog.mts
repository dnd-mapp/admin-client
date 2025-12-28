import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

const changelogPath = resolve('CHANGELOG.md');
const manifestPath = resolve('package.json');

const unreleasedHeading = '## [Unreleased]';
const headingRegex = /^## \[.+?]/gm;

const newUnreleasedSection = [
    '## [Unreleased]',
    '',
    '### Added',
    '',
    '### Changed',
    '',
    '### Fixed',
    '',
    '### Security',
    '',
    '---',
].join('\n');

async function getVersion() {
    const manifestContents = await readFile(manifestPath, { encoding: 'utf8' });
    const manifest = JSON.parse(manifestContents);

    return manifest.version;
}

async function updateChangelog(version: string) {
    const changelogContents = await readFile(changelogPath, { encoding: 'utf8' });

    const unreleasedIndex = changelogContents.indexOf(unreleasedHeading);

    if (unreleasedIndex === -1) {
        throw new Error("Could not find '## [Unreleased]' in CHANGELOG.md");
    }
    headingRegex.lastIndex = unreleasedIndex + unreleasedHeading.length;

    const nextHeadingMatch = headingRegex.exec(changelogContents);
    const unreleasedBodyEnd = nextHeadingMatch ? nextHeadingMatch.index : changelogContents.length;

    const beforeUnreleased = changelogContents.slice(0, unreleasedIndex);
    const unreleasedHeaderAndBody = changelogContents.slice(unreleasedIndex, unreleasedBodyEnd);
    const afterUnreleasedBlock = changelogContents.slice(unreleasedBodyEnd);

    const lines = unreleasedHeaderAndBody.split('\n');
    const bodyLines = lines.slice(1);
    const unreleasedBody = bodyLines.join('\n').trim();

    const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    const newVersionSection = [`## [${version}] - ${date}`, '', unreleasedBody || '_No notable changes._', ''].join(
        '\n',
    );

    const newContent = beforeUnreleased + newUnreleasedSection + '\n\n' + newVersionSection + afterUnreleasedBlock;

    await writeFile(changelogPath, newContent, { encoding: 'utf8' });
}

async function main() {
    const version = await getVersion();

    await updateChangelog(version);
}

main().catch((error) => console.error(error));
