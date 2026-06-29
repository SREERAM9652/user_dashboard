import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

export default function UserTable({ users, sortField, sortOrder, onSort, onEdit, onDelete }) {
    const handleSort = (field) => {
        onSort(field);
    };

    const SortIcon = ({ field }) => {
        if (sortField !== field) return <span className="ml-1 text-slate-300">↕</span>;
        return <span className="ml-1 text-indigo-600">{sortOrder === 'asc' ? '↑' : '↓'}</span>;
    };

    if (users.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500">
                No users found matching your criteria.
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="py-3 px-4 font-semibold text-sm text-slate-700 whitespace-nowrap">
                                ID
                            </th>
                            <th 
                                className="py-3 px-4 font-semibold text-sm text-slate-700 whitespace-nowrap cursor-pointer hover:bg-slate-100 transition-colors"
                                onClick={() => handleSort('firstName')}
                            >
                                First Name <SortIcon field="firstName" />
                            </th>
                            <th 
                                className="py-3 px-4 font-semibold text-sm text-slate-700 whitespace-nowrap cursor-pointer hover:bg-slate-100 transition-colors"
                                onClick={() => handleSort('lastName')}
                            >
                                Last Name <SortIcon field="lastName" />
                            </th>
                            <th 
                                className="py-3 px-4 font-semibold text-sm text-slate-700 whitespace-nowrap cursor-pointer hover:bg-slate-100 transition-colors"
                                onClick={() => handleSort('email')}
                            >
                                Email <SortIcon field="email" />
                            </th>
                            <th 
                                className="py-3 px-4 font-semibold text-sm text-slate-700 whitespace-nowrap cursor-pointer hover:bg-slate-100 transition-colors"
                                onClick={() => handleSort('department')}
                            >
                                Department <SortIcon field="department" />
                            </th>
                            <th className="py-3 px-4 font-semibold text-sm text-slate-700 whitespace-nowrap text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="py-3 px-4 text-sm text-slate-500">
                                    {user.id}
                                </td>
                                <td className="py-3 px-4 text-sm font-medium text-slate-900">
                                    {user.firstName}
                                </td>
                                <td className="py-3 px-4 text-sm font-medium text-slate-900">
                                    {user.lastName}
                                </td>
                                <td className="py-3 px-4 text-sm text-slate-500">
                                    {user.email}
                                </td>
                                <td className="py-3 px-4 text-sm text-slate-500">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        {user.department}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-right space-x-2">
                                    <button 
                                        onClick={() => onEdit(user)}
                                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        title="Edit User"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={() => onDelete(user)}
                                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                                        title="Delete User"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
