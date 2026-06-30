import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types/menu';
import { formatPrice } from '../utils/menuHelpers';

interface Props {
  item: MenuItem;
  onRemove?: (id: string) => void;
}

export default function MenuItemCard({ item, onRemove }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.dishName}>{item.dishName}</Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
      </View>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {onRemove && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemove(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2a241d',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dishName: {
    color: '#f3e9da',
    fontSize: 17,
    fontWeight: '700',
    flexShrink: 1,
    marginRight: 8,
  },
  price: {
    color: '#d8a657',
    fontSize: 16,
    fontWeight: '700',
  },
  course: {
    color: '#9c8c74',
    fontSize: 13,
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  description: {
    color: '#cdbfa9',
    fontSize: 14,
    marginTop: 6,
    lineHeight: 19,
  },
  removeButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#5c2b2b',
  },
  removeButtonText: {
    color: '#f3e9da',
    fontWeight: '600',
    fontSize: 13,
  },
});
