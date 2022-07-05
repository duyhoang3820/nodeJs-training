const fsPromise = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf8'
    );
    console.log(data);
    await fsPromise.unlink(
      path.join(__dirname, 'files', 'starter.txt')
    );
    await fsPromise.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      data
    );
    await fsPromise.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\nNice to meet you.'
    );
    await fsPromise.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'promiseComplete.txt')
    );
    const newData = await fsPromise.readFile(
      path.join(__dirname, 'files', 'promiseComplete.txt'),
      'utf8'
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(
//   path.join(__dirname, 'files', 'starter.txt'),
//   'utf8',
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log('Hello...');

// fs.writeFile(
//   path.join(__dirname, 'files', 'reply.txt'),
//   'Nice to meet you.',
//   (err) => {
//     if (err) throw err;
//     console.log('Write complete');
// //
//     fs.appendFile(
//       path.join(__dirname, 'files', 'reply.txt'),
//       '\n\nYes is it.',
//       (err) => {
//         if (err) throw err;
//         console.log('Append complete');
// //
//         fs.rename(
//           path.join(__dirname, 'files', 'reply.txt'),
//           path.join(__dirname, 'files', 'newReply.txt'),
//           (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//           }
//         );
//       }
//     );
//   }
// );

// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
