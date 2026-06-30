import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useMenu } from '../context/MenuContext';
import { COURSES, Course } from '../types/menu';
import MenuItemCard from '../components/MenuItemCard';

export default function AddMenuItemScreen() {
  const { menuItems, addMenuItem, removeMenuItem } = useMenu();

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>(COURSES[0]);
  const [price, setPrice] = useState('');

  function handleAddItem() {
    if (!dishName.trim() || !description.trim() || !price.trim()) {
      Alert.alert('Missing details', 'Please fill in every field before adding a dish.');
      return;
    }

    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      Alert.alert('Invalid price', 'Please enter a valid price greater than 0.');
      return;
    }

    addMenuItem({
      dishName: dishName.trim(),
      description: description.trim(),
      course,
      price: numericPrice,
    });

    setDishName('');
    setDescription('');
    setPrice('');
    setCourse(COURSES[0]);
  }

  function handleRemoveItem(id: string) {
    removeMenuItem(id);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.sectionTitle}>Add a Dish</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish name"
        placeholderTextColor="#8c7e69"
        value={dishName}
        onChangeText={setDishName}
      />

      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Description"
        placeholderTextColor="#8c7e69"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Price (e.g. 120)"
        placeholderTextColor="#8c7e69"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Course</Text>
      <View style={styles.courseRow}>
        {COURSES.map((courseOption) => (
          <TouchableOpacity
            key={courseOption}
            style={[
              styles.courseChip,
              course === courseOption && styles.courseChipActive,
            ]}
            onPress={() => setCourse(courseOption)}
          >
            <Text
              style={[
                styles.courseChipText,
                course === courseOption && styles.courseChipTextActive,
              ]}
            >
              {courseOption}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>Add to Menu</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Current Menu Items</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onRemove={handleRemoveItem} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No dishes added yet.</Text>
        }
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161310',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    color: '#f3e9da',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 6,
  },
  input: {
    backgroundColor: '#241f19',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#f3e9da',
    marginBottom: 10,
    fontSize: 14,
  },
  multiline: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  label: {
    color: '#cdbfa9',
    fontSize: 13,
    marginBottom: 6,
  },
  courseRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },
  courseChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#241f19',
  },
  courseChipActive: {
    backgroundColor: '#d8a657',
  },
  courseChipText: {
    color: '#cdbfa9',
    fontSize: 13,
    fontWeight: '600',
  },
  courseChipTextActive: {
    color: '#1f1b16',
  },
  addButton: {
    backgroundColor: '#d8a657',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#1f1b16',
    fontWeight: '700',
    fontSize: 15,
  },
  emptyText: {
    color: '#8c7e69',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});
