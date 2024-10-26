import { View } from 'react-native';
import styles from './../AppStyles';
import MusicList from './MusicList';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <MusicList/>
        </View>
    );
}

export default HomeScreen;
