import { FlatList, StyleSheet, View  } from "react-native";
import { Button, Text} from "react-native-paper";
import React from "react";

interface State {
    selectedIndex: integer;
    selectedChoice: string;
}

interface Props {
    defaultSelectionIndex?: integer | undefined;
    titleStyle? : StyleProp<TextStyle> | undefined;
    containerStyle?: StyleProp<ViewStyle> | undefined;
    choiceTextColor? : string | undefined;
    choiceButtonStyle?: StyleProp<ViewStyle> | undefined;
    choicesContainerStyle?: StyleProp<ViewStyle> | undefined;
    title: string;
    choices: Array<string>;
    onSelection: (id: integer, value: string) => void;
  }


export default class MultipleChoice extends React.Component<Props, State> {

    constructor(props: Props,) {
        super(props);
        this.state = {
            selectedIndex: -1,
            selectedChoice: ''
        }
    }

    componentDidMount(){

        const {defaultSelectionIndex, choices, onSelection } = this.props;

        if(defaultSelectionIndex && (defaultSelectionIndex > 0 && defaultSelectionIndex < choices.length)){
            this.setState({selectedIndex: defaultSelectionIndex, selectedChoice: choices[defaultSelectionIndex]});
            onSelection(defaultSelectionIndex, choices[defaultSelectionIndex]);
        }
    }

    render() {
        const {selectedChoice, selectedIndex} = this.state;
        const {containerStyle, titleStyle, choicesContainerStyle, choiceTextColor, choiceButtonStyle, choices, title, onSelection } = this.props;
        return (
            <View style={containerStyle}>
                <Text variant="titleMedium" style={titleStyle}> {title} </Text>
                <FlatList
                    style={[style.choicesContainer, choicesContainerStyle]}
                    scrollEnabled={false}
                    data={choices}
                    renderItem={({item}) => (
                        <Button
                            icon={this.state.selectedChoice == item ? 'radiobox-marked' : 'radiobox-blank'}
                            mode="text"
                            onPress={() => {
                                this.setState({selectedChoice: item, selectedIndex: choices.indexOf(item) })
                                onSelection(choices.indexOf(item), item)
                            }}
                            style={[style.buttonStyle, choiceButtonStyle]}
                            textColor={choiceTextColor}
                            >
                            {item}
                        </Button>
                    )}
                    keyExtractor={(item, index) => index}
                />
                </View>
        )
    }
}

const style = StyleSheet.create({
    choicesContainer: {
        marginHorizontal: 8,
    },
    buttonStyle: {
        marginTop: 4,
        alignSelf: 'flex-start'
    }
});

