import { readFile } from 'fs/promises';
import { resolve } from 'path';

const manifestPath = resolve('package.json');
const changelogPath = resolve('CHANGELOG.md');

async function getVersion() {
    const manifestContents = await readFile(manifestPath, { encoding: 'utf8' });
    const manifest = JSON.parse(manifestContents);

    return manifest.version;
}

function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function extractSection(version: string) {
    const content = await readFile(changelogPath, { encoding: 'utf8' });

    const match = content.match(new RegExp(`^## \\[${escapeRegExp(version)}\\][^\\n]*\\n`, 'm'));

    if (!match || match.index === undefined) return null;
    const startIndex = match.index + match[0].length;

    const nextSection = /^---/gm;
    nextSection.lastIndex = startIndex;

    const nextHeadingMatch = nextSection.exec(content);
    const endIndex = nextHeadingMatch ? nextHeadingMatch.index : content.length;

    const sectionBody = content.slice(startIndex, endIndex).trim();
    return sectionBody || null;
}

async function main() {
    const version = await getVersion();

    const section = await extractSection(version);

    if (!section) {
        console.error(`No changelog section found for version ${version}`);
        process.exit(1);
    }

    // Print as-is; GH Actions step will handle escaping/newlines
    process.stdout.write(section);
}

main().catch((error) => console.error(error));
