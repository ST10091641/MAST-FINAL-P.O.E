import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useMenu } from '../context/MenuContext';
import { COURSES, Course } from '../types/menu';
import { filterItemsByCourse } from '../utils/menuHelpers';
import MenuItemCard from '../components/MenuItemCard';

export default function FilterScreen() {
  const { menuItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<Course | 'All'>('All');

  const itemsToShow =
    selectedCourse === 'All'
      ? menuItems
      : filterItemsByCourse(menuItems, selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show me:</Text>

      <View style={styles.chipRow}>
        <TouchableOpacity
          style={[
            styles.chip,
            selectedCourse === 'All' && styles.chipActive,
          ]}
          onPress={() => setSelectedCourse('All')}
        >
          <Text
            style={[
              styles.chipText,
              selectedCourse === 'All' && styles.chipTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        {COURSES.map((courseOption) => (
          <TouchableOpacity
            key={courseOption}
            style={[
              styles.chip,
              selectedCourse === courseOption && styles.chipActive,
            ]}
            onPress={() => setSelectedCourse(courseOption)}
          >
            <Text
              style={[
                styles.chipText,
                selectedCourse === courseOption && styles.chipTextActive,
              ]}
            >
              {courseOption}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={itemsToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No dishes in this course yet.</Text>
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
  heading: {
    color: '#f3e9da',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#241f19',
  },
  chipActive: {
    backgroundColor: '#d8a657',
  },
  chipText: {
    color: '#cdbfa9',
    fontSize: 13,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#1f1b16',
  },
  emptyText: {
    color: '#8c7e69',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
  },
});
