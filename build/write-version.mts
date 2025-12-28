import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname } from 'path';

const placeholderValue = '{version}';

const manifestFilePath = './package.json';
const templateFilePath = './build/version-template.txt';
const destinationFilePath = './src/app/constants/version.ts';

async function writeVersion() {
    console.log('Generating APP_VERSION constant');

    console.log('Reading manifest (package.json)');
    const manifestFileContents = await readFile(manifestFilePath, { encoding: 'utf8' });
    const manifest = JSON.parse(manifestFileContents);

    console.log('Reading file template');
    let appVersionFileContents = await readFile(templateFilePath, { encoding: 'utf8' });
    appVersionFileContents = appVersionFileContents.replace(placeholderValue, `v${manifest.version}`);

    console.log('Creating directories and constant file');
    await mkdir(dirname(destinationFilePath), { recursive: true });
    await writeFile(destinationFilePath, appVersionFileContents, { encoding: 'utf8' });

    console.log('Done');
}

writeVersion().catch((error) => console.error(error));
