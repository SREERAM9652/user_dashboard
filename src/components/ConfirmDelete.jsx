import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmDelete({ isOpen, onClose, onConfirm, userName, isDeleting }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />
                        </div>
                        <button 
                            onClick={onClose}
                            className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium leading-6 text-slate-900">Delete User</h3>
                        <div className="mt-2">
                            <p className="text-sm text-slate-500">
                                Are you sure you want to delete <span className="font-semibold text-slate-700">{userName}</span>? This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isDeleting}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                    >
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}
