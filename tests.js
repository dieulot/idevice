let hasFailedTest = false

function test(name, gpu, width, height, devicePixelRatio, userAgent = '') {
  const document = {
    createElement: () => {
      return {
        getContext: () => {
          return {
            getExtension: () => {
              return {
                UNMASKED_RENDERER_WEBGL: 'dummy',
              }
            },
            getParameter: () => gpu,
          }
        },
      }
    },
  }
  const screen = {
    width,
    height,
  }
  const navigator = {
    userAgent,
  }

  eval(require('fs').readFileSync('./iDevice.js').toString())

  if (name !== iDevice) {
    hasFailedTest = true
    console.error(`X    expected "${name}", "${iDevice}" returned`)
  }
}

test('iPhone 4s', 'PowerVR SGX 543', 320, 480, 2)
test('iPhone 5/5c', 'PowerVR SGX 543', 320, 568, 2)
test('iPhone 5s', 'Apple A7 GPU', 320, 568, 2)
test('iPhone 6', 'Apple A8 GPU', 375, 667, 2)
test('iPhone 6 Plus', 'Apple A8 GPU', 414, 736, 3)
test('iPhone 6s', 'Apple A9 GPU', 375, 667, 2)
test('iPhone 6s Plus', 'Apple A9 GPU', 414, 736, 3)
test('iPhone SE (or 6s with Display Zoom)', 'Apple A9 GPU', 320, 568, 2)
test('iPhone 7', 'Apple A10 GPU', 375, 667, 2)
test('iPhone 7 Plus', 'Apple A10 GPU', 414, 736, 3)
test('iPhone 8', 'Apple A11 GPU', 375, 667, 2)
test('iPhone 8 Plus', 'Apple A11 GPU', 414, 736, 3)
test('iPhone X', 'Apple A11 GPU', 375, 812, 3)
test('iPhone XS (or XS Max with Display Zoom)', 'Apple A12 GPU', 375, 812, 3)
test('iPhone XS Max', 'Apple A12 GPU', 414, 896, 3)
test('iPhone XR', 'Apple A12 GPU', 414, 896, 2)

// Display Zoom:
test('iPhone 6', 'Apple A8 GPU', 320, 568, 2)
test('iPhone 6 Plus', 'Apple A8 GPU', 375, 667, 3)
test('iPhone 6s Plus', 'Apple A9 GPU', 375, 667, 3)
test('iPhone 7', 'Apple A10 GPU', 320, 568, 2)
test('iPhone 7 Plus', 'Apple A10 GPU', 375, 667, 3)
test('iPhone 8', 'Apple A11 GPU', 320, 568, 2)
test('iPhone 8 Plus', 'Apple A11 GPU', 375, 667, 3)
test('iPhone XR', 'Apple A12 GPU', 375, 812, 2)

test('iPad 2/mini 1', 'PowerVR SGX 535', 768, 1024, 1)
test('iPad 3', 'PowerVR SGX 543', 768, 1024, 2)
test('iPad 4', 'PowerVR SGX 554', 768, 1024, 2)
test('iPad Air/mini 2/mini 3', 'Apple A7 GPU', 768, 1024, 2)
test('iPad Air 2', 'Apple A8X GPU', 768, 1024, 2)
test('iPad mini 4', 'Apple A8 GPU', 768, 1024, 2)
test('iPad Pro 12.9" (2015)', 'Apple A9X GPU', 1024, 1366, 2)
test('iPad Pro 9.7" (2016)', 'Apple A9X GPU', 768, 1024, 2)
test('iPad (2017)', 'Apple A9 GPU', 768, 1024, 2)
test('iPad Pro 12.9" (2017)', 'Apple A10X GPU', 1024, 1366, 2)
test('iPad Pro 10.5" (2017)', 'Apple A10X GPU', 834, 1112, 2)
test('iPad (2018)', 'Apple A10 GPU', 768, 1024, 2)
test('iPad Pro 11" (2018)', 'Apple A12X GPU', 834, 1194, 2)
test('iPad Pro 12.9" (2018)', 'Apple A12X GPU', 1024, 1366, 2)

test('iPod Touch 5', 'PowerVR SGX 543', 320, 568, 2, 'Mozilla/5.0 (iPod touch; ...')
test('iPod Touch 6', 'Apple A8 GPU', 320, 568, 2, 'Mozilla/5.0 (iPod touch; ...')

test('Apple Watch Series 4', 'Apple S4 GPU', 320, 568, 2)

test(undefined, 'Some GPU', 320, 568, 2)
test('Unidentified A12 320x568@2', 'Apple A12 GPU', 320, 568, 2)
test('Unidentified A13 375x812@3', 'Apple A13 GPU', 375, 812, 3)
test('Unidentified A15 400x800@4', 'Apple A15 GPU', 400, 800, 4)
test('Unidentified A16X 400x800@4', 'Apple A16X GPU', 400, 800, 4)
test('Unidentified A17z 400x800@4', 'Apple A17z GPU', 400, 800, 4)

if (!hasFailedTest) {
  console.log('Passed')
}
