import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useMenu } from '../context/MenuContext';
import { RootStackParamList } from '../types/navigation';
import MenuItemCard from '../components/MenuItemCard';
import {
  getTotalItemCount,
  getAveragePricePerCourse,
  formatPrice,
} from '../utils/menuHelpers';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { menuItems } = useMenu();

  const totalItems = getTotalItemCount(menuItems);
  const averages = getAveragePricePerCourse(menuItems);

  return (
    <View style={styles.container}>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>Menu Overview</Text>
        <Text style={styles.summaryLine}>
          Total menu items: <Text style={styles.bold}>{totalItems}</Text>
        </Text>

        {averages.map((average) => (
          <Text key={average.course} style={styles.summaryLine}>
            Avg {average.course}:{' '}
            <Text style={styles.bold}>
              {average.itemCount > 0 ? formatPrice(average.average) : 'No items yet'}
            </Text>
          </Text>
        ))}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('AddMenuItem')}
        >
          <Text style={styles.primaryButtonText}>Manage Menu Items</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Filter')}
        >
          <Text style={styles.secondaryButtonText}>Filter by Course</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listHeading}>Full Menu</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No dishes on the menu yet. Tap "Manage Menu Items" to add some.
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161310',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  summaryBox: {
    backgroundColor: '#241f19',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  summaryTitle: {
    color: '#f3e9da',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  summaryLine: {
    color: '#cdbfa9',
    fontSize: 14,
    marginTop: 2,
  },
  bold: {
    color: '#d8a657',
    fontWeight: '700',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#d8a657',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#1f1b16',
    fontWeight: '700',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#3a3127',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#f3e9da',
    fontWeight: '700',
  },
  listHeading: {
    color: '#f3e9da',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  emptyText: {
    color: '#8c7e69',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
  },
});
