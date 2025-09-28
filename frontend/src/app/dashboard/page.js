'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Mail, 
  Calendar, 
  Shield, 
  LogOut, 
  Edit3, 
  Save, 
  X, 
  Eye, 
  EyeOff,
  Settings,
  Key,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { cn, formatDate, formatDateTime } from '@/lib/utils';

export default function DashboardPage() {
  const { user, logout, updateProfile, changePassword, deleteAccount, loading } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
    reset: resetProfile,
  } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPassword,
    watch,
  } = useForm();

  const newPassword = watch('newPassword');

  const onProfileSubmit = async (data) => {
    const result = await updateProfile(data);
    if (result.success) {
      setIsEditing(false);
    }
  };

  const onPasswordSubmit = async (data) => {
    const { confirmPassword, ...passwordData } = data;
    const result = await changePassword(passwordData);
    if (result.success) {
      resetPassword();
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const handleDeleteAccount = async () => {
    const result = await deleteAccount();
    if (result.success) {
      router.push('/');
    }
  };

  const startEditing = () => {
    setIsEditing(true);
    resetProfile({
      name: user?.name || '',
      email: user?.email || '',
    });
  };

  const cancelEditing = () => {
    setIsEditing(false);
    resetProfile({
      name: user?.name || '',
      email: user?.email || '',
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
                  <p className="text-sm text-slate-600">Welcome back, {user.name}!</p>
                </div>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="text-slate-600 hover:text-slate-900"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="mb-8">
            <nav className="flex space-x-1 bg-white/50 backdrop-blur-sm rounded-lg p-1 border border-slate-200">
              <button
                onClick={() => setActiveTab('profile')}
                className={cn(
                  'flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all',
                  activeTab === 'profile'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={cn(
                  'flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all',
                  activeTab === 'security'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <Key className="h-4 w-4 mr-2" />
                Security
              </button>
              <button
                onClick={() => setActiveTab('danger')}
                className={cn(
                  'flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all',
                  activeTab === 'danger'
                    ? 'bg-white text-red-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Danger Zone
              </button>
            </nav>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Profile Information</CardTitle>
                      <CardDescription>
                        Manage your personal information and account details
                      </CardDescription>
                    </div>
                    {!isEditing && (
                      <Button onClick={startEditing} variant="outline">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <form onSubmit={handleProfileSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            {...registerProfile('name', {
                              required: 'Name is required',
                              minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters',
                              },
                            })}
                            id="name"
                            className={cn(
                              profileErrors.name && 'border-red-500 focus-visible:ring-red-500'
                            )}
                          />
                          {profileErrors.name && (
                            <p className="text-sm text-red-600">{profileErrors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            {...registerProfile('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                            type="email"
                            id="email"
                            className={cn(
                              profileErrors.email && 'border-red-500 focus-visible:ring-red-500'
                            )}
                          />
                          {profileErrors.email && (
                            <p className="text-sm text-red-600">{profileErrors.email.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <Button type="button" variant="outline" onClick={cancelEditing}>
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                        <Button type="submit" disabled={loading}>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-slate-600">Full Name</Label>
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-slate-400" />
                            <p className="text-slate-900">{user.name}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-slate-600">Email Address</Label>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-slate-400" />
                            <p className="text-slate-900">{user.email}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-slate-600">Member Since</Label>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-slate-400" />
                            <p className="text-slate-900">{formatDate(user.createdAt)}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-slate-600">Last Updated</Label>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-slate-400" />
                            <p className="text-slate-900">{formatDateTime(user.updatedAt)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Change Password</CardTitle>
                  <CardDescription>
                    Update your password to keep your account secure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input
                          {...registerPassword('currentPassword', {
                            required: 'Current password is required',
                          })}
                          type={showPassword ? 'text' : 'password'}
                          id="currentPassword"
                          className={cn(
                            'pr-10',
                            passwordErrors.currentPassword && 'border-red-500 focus-visible:ring-red-500'
                          )}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-10 px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-slate-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-slate-400" />
                          )}
                        </Button>
                      </div>
                      {passwordErrors.currentPassword && (
                        <p className="text-sm text-red-600">{passwordErrors.currentPassword.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Input
                            {...registerPassword('newPassword', {
                              required: 'New password is required',
                              minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                              },
                            })}
                            type={showNewPassword ? 'text' : 'password'}
                            id="newPassword"
                            className={cn(
                              'pr-10',
                              passwordErrors.newPassword && 'border-red-500 focus-visible:ring-red-500'
                            )}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-10 px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-4 w-4 text-slate-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-slate-400" />
                            )}
                          </Button>
                        </div>
                        {passwordErrors.newPassword && (
                          <p className="text-sm text-red-600">{passwordErrors.newPassword.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <div className="relative">
                          <Input
                            {...registerPassword('confirmPassword', {
                              required: 'Please confirm your new password',
                              validate: (value) => value === newPassword || 'Passwords do not match',
                            })}
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            className={cn(
                              'pr-10',
                              passwordErrors.confirmPassword && 'border-red-500 focus-visible:ring-red-500'
                            )}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-10 px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4 text-slate-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-slate-400" />
                            )}
                          </Button>
                        </div>
                        {passwordErrors.confirmPassword && (
                          <p className="text-sm text-red-600">{passwordErrors.confirmPassword.message}</p>
                        )}
                      </div>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full md:w-auto">
                      <Key className="h-4 w-4 mr-2" />
                      Update Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Danger Zone Tab */}
          {activeTab === 'danger' && (
            <div className="space-y-6">
              <Card className="shadow-lg border-0 border-red-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">Danger Zone</CardTitle>
                  <CardDescription>
                    Irreversible and destructive actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-red-900">Delete Account</h3>
                          <p className="text-red-700 mt-1">
                            Once you delete your account, there is no going back. Please be certain.
                          </p>
                          <div className="mt-4">
                            {!showDeleteConfirm ? (
                              <Button
                                variant="destructive"
                                onClick={() => setShowDeleteConfirm(true)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete Account
                              </Button>
                            ) : (
                              <div className="space-y-3">
                                <p className="text-sm text-red-600 font-medium">
                                  Are you absolutely sure? This action cannot be undone.
                                </p>
                                <div className="flex space-x-3">
                                  <Button
                                    variant="destructive"
                                    onClick={handleDeleteAccount}
                                    disabled={loading}
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Yes, Delete My Account
                                  </Button>
                                  <Button
                                    variant="outline"
                                    onClick={() => setShowDeleteConfirm(false)}
                                  >
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
