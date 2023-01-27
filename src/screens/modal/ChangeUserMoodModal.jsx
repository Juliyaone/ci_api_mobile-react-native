import React, {useState, useId} from 'react';
import {Alert, Modal, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSetUserMoodMutation} from "../../redux/usersApi";

const globalStyles = require("../globalStyles");

function ChangeUserMoodModal({emojies}) {
	  const keyId = useId();

		const [moodVal, setMoodVal] = useState('');
  	const [modalVisible, setModalVisible] = useState(true);
		const [setUserMood, {error: UserMoodError, isLoading: UserMoodLoading }] = useSetUserMoodMutation();

    const arrEmojies = [{id: 1, code: '😡', name: 'Все бесят'}, {id: 2, code: '😞', name: 'Печалька-тоска'}, {id: 3, code:'🤐', name: 'Нервно-тревожно'}, {id: 4, code:'😁', name: 'Бодрячок'}, {id: 5, code:'🥰', name: 'Всех люблю'}]




		const sendUserMood = (moodVal) => {
			setMoodVal(moodVal);
			const moodId = arrEmojies.filter((mood) => mood.name === moodVal)
			setUserMood(moodId.id);
			setModalVisible(!modalVisible);
		}


    return (
        <SafeAreaView>
            <View style={styles.box}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}>
                    <View>

															<View style={styles.modalView}>
																<Text style={globalStyles.header}>Выберите настроение</Text>
																	<View style={styles.modalView}>
																		{arrEmojies.map((emoji) => (
																			<View style={styles.boxMood} key={emoji.code}>
																	
																				<TouchableOpacity style={globalStyles.inputBorder} onPress={()=>setMoodVal(emoji.name)}>
																					<Text style={globalStyles.textBlack}>{emoji.name}{emoji.code}</Text>
																					{moodVal === emoji.name && <View style={styles.inner} /> }
																				</TouchableOpacity>
																			</View>
																		))}

																			<TouchableOpacity
																				key={keyId}
																				onPress={()=>{sendUserMood(moodVal)}}
																				style={globalStyles.btnRed}>
																				<Text style={globalStyles.textWhite}>Выбрать настроение</Text>
																			</TouchableOpacity>
																		</View>
															</View>
                    </View>
                </Modal>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
		justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
	outter: {
		position: 'relative',
		width: '80%',
		height: 30,
		borderRadius: 15,
		borderWidth: 1,
		justifyContent: 'center',
    alignItems: 'center',
		zIndex: 1
	},
	inner: {
		position: 'absolute',
		width: "100%",
		height: '100%',
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f7cdcb",
		borderRadius: 15,
		zIndex: -1,
	},
	boxMood: {
		flexDirection: 'row',
		justifyContent: 'space-around',
    alignItems: 'center',
	}
});

export default ChangeUserMoodModal;