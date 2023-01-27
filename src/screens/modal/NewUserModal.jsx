import React, {useId, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, SafeAreaView, Button, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { Video } from 'expo-av';

const globalStyles = require("../globalStyles");

function NewUserModal({user, hello_video}) {
    const keyId = useId();	
    const [modalVisible, setModalVisible] = useState(true);

    const video = React.useRef(null);
    const [status, setStatus] = useState({});

    // console.log(user);
    // console.log(hello_video);

    return (
        <SafeAreaView>
          <ScrollView>
            <View>
              <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                  setModalVisible(!modalVisible);
                  }}>
                      <View style={styles.modalView}>
                          <Text style={globalStyles.header}>Поздравляем, {user.username} , мы дарим вам пробные 7 дней</Text>
                          <View>
                             <Video
                                ref={video}
                                style={styles.video}
                                source={require("../../media/e1c1.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                              />
                              <View style={styles.buttons}>
                                <Button title="Play from 50s" onPress={() => video.current.playFromPositionAsync(50000)} />
                                <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
                              </View>
                              <StatusBar style="auto" />
                            </View>
                          </View>

                      <TouchableOpacity
                        key={keyId}
                        onPress={()=>{setModalVisible(!modalVisible)}}
                        style={globalStyles.btnRed}>
                        <Text style={globalStyles.textWhite}>Закрыть</Text>
                      </TouchableOpacity>
              </Modal>
          </View>
          </ScrollView>
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
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  video: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonVideo: {
    // width: 20,
    // height: 20,
    // backgroundColor: 'red',
  }
});


export default NewUserModal;