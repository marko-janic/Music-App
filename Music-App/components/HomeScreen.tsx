import { View } from 'react-native';
import styles from './../AppStyles';
import MusicList from './MusicList';
import VideoSearchHeader from './VideoSearchHeader';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <VideoSearchHeader/>
            <MusicList/>
        </View>
    );
}

export default HomeScreen;
