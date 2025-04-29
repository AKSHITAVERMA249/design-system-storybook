import React, { useState } from 'react';
import './SideNavigation.css';

export type NavItem = {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

export interface SideNavigationProps {
  items: NavItem[];
  collapsed?: boolean;
  onSelect?: (label: string) => void;
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'tertiary' ;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
  items,
  collapsed: initialCollapsed = false,
  onSelect,
  orientation = 'vertical',
  size = 'md',
  color ='tertiary',
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    onSelect?.(label);
  };

  return (
    <nav
      className={`sidebar ${collapsed ? 'collapsed' : ''} ${orientation} size-${size}`}
      aria-label="Sidebar Navigation"
    >
        
      {orientation === 'vertical' && (
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          {collapsed ? '☰' : '⇤'}
        </button>
      )}
      <ul className="nav-list">
        {items.map((item) => (
          <li
            key={item.label}
            className={`nav-item ${item.disabled ? 'disabled' : ''} ${
              selected === item.label ? `selected ${color}` : ''
            }`
        
        }
            tabIndex={item.disabled ? -1 : 0}
            aria-disabled={item.disabled}
            role="button"
            onClick={() => !item.disabled && handleSelect(item.label)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !item.disabled) handleSelect(item.label);
            }}
          >
            {item.icon && <span className="icon">{item.icon}</span>}
            {!collapsed && <span className="label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};
