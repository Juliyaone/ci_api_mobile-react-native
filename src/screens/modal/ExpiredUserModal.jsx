import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image} from 'react-native';


function ExpiredUserModal({user}) {
    return (
        <SafeAreaView>
            <View>
                <Text>
                    {user.username}, ваша подписка истекла.
                       <TouchableOpacity>Возобновить</TouchableOpacity>
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default ExpiredUserModal;