 import React from 'react';
 import {Text, Button, TextInput, View, SafeAreaView, ScrollView } from 'react-native';
 import { Formik } from 'formik';

 const globalStyles = require("./globalStyles");
import Header from '../components/header/Header';



function ProfileEditScreen({navigation, route}) {

  return (
    <SafeAreaView style={globalStyles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>

      <Header/>
      
      <Text>{route.params?.username}</Text>
      <Text>{route.params?.last_name}</Text>
      <Text>{route.params?.phone}</Text>
      <Text>{route.params?.email}</Text>
        <View>
          <Formik
            initialValues={{ email: '' }}
            // onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput style={globalStyles.inputBorder}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileEditScreen;