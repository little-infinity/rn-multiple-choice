
# rn-multiple-choices
React native component for multiple choice questions-answers/choices.


## Install

To add this package to your project:

### npm
```bash
  npm install rn-multiple-choices
```
### yarn
```bash
  yarn add rn-multiple-choices
```

## Usage

### Import
```javascript
import MultipleChoice from 'rn-multiple-choices';
```

### Basic
```javascript
                <MultipleChoice
                    title={'What is ReactJS?'}
                    choices={['Server-side framework', 'user interface framework', 'both a and b', 'none of the above']}
                    onSelection={(index, choice) => {
                        console.log('selected choice index', index)
                        console.log('selected choice value', choice)
                    }}
                />
```

![Basic usage](https://user-images.githubusercontent.com/123744955/215139776-9d61ee1c-bf7a-441c-9cdb-d3cd3ba44448.png)

### Custom styling
```javascript
                <MultipleChoice
                    title={'What is ReactJS?'}
                    choices={['Server-side framework', 'user interface framework', 'both a and b', 'none of the above']}
                    onSelection={(index, choice) => {
                        console.log('selected choice index', index)
                        console.log('selected choice value', choice)
                    }}
                    containerStyle={{backgroundColor: '#bfc2c7', paddingVertical: 25, paddingHorizontal: 10, borderRadius: 6}}
                    titleStyle={{fontSize: 24, color: '#1D5C5D'}}
                    choicesContainerStyle={{marginTop: 10, padding: 10, borderWidth: 0.5, borderColor: '#1D5C5D', borderRadius: 12}}
                    choiceButtonStyle={{width : '100%', alignItems: 'flex-start'}}
                    choiceTextColor={'#1D5C5D'}
                />
```
![Custom styling](https://user-images.githubusercontent.com/123744955/215140697-37c152e4-9a61-4592-9111-f69faa469292.png)


## Props
### Basic
| Prop          | Type          |  Description                      |
| --------------|---------------|-----------------------------------|
| title         | string        |  title string                     |
| choices       | array[string] | Array of choice                   |
| onSelection   | func          |  callback for option is selected  |


### Custom styling
| Prop                      | Type          |  Description                          |
| --------------            |---------------|-----------------------------------    |
| containerStyle            | object        |  parent container style               |
| titleStyle                | object        |  title/question  textStyle                 |
| choicesContainerStyle     | object        |  container style for choices/options  |
| choiceButtonStyle         | object        |  button style for choices/options     |
| choiceTextColor          | string         |  choice text & radio icon color value  |

## Authors
- [@little-infinity](https://github.com/little-infinity)


## Contributing

Contributions are always welcome!



## License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[MIT](https://choosealicense.com/licenses/mit/)

