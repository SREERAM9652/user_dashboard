import { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api/userService';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await getUsers();
            const mappedUsers = response.data.map(user => {
                const names = user.name.split(" ");
                return {
                    id: user.id,
                    firstName: names[0] || "",
                    lastName: names.slice(1).join(" ") || "",
                    email: user.email,
                    department: "Engineering" // Mock data for assignment
                };
            });
            setUsers(mappedUsers);
            setError(null);
        } catch (err) {
            setError("Failed to load users. Please check your network connection.");
        } finally {
            setLoading(false);
        }
    };

    const add = async (newUser) => {
        try {
            const response = await createUser(newUser);
            // Simulate adding with a real ID (JSONPlaceholder might just return ID 11)
            const createdUser = { ...newUser, id: response.data.id || Date.now() };
            setUsers([createdUser, ...users]);
            return { success: true };
        } catch (err) {
            return { success: false, error: "Failed to create user." };
        }
    };

    const edit = async (id, updatedUser) => {
        try {
            await updateUser(id, updatedUser);
            setUsers(users.map(user => (user.id === id ? { ...updatedUser, id } : user)));
            return { success: true };
        } catch (err) {
            return { success: false, error: "Failed to update user." };
        }
    };

    const remove = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
            return { success: true };
        } catch (err) {
            return { success: false, error: "Failed to delete user." };
        }
    };

    return {
        users,
        loading,
        error,
        add,
        edit,
        remove
    };
};
