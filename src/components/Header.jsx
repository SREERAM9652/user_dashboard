import React from 'react';
import { Users } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="bg-indigo-600 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Tacnique</h1>
                        <p className="text-xs text-slate-500 font-medium">User Management Dashboard</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
