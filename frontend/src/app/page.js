'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  ArrowRight,
  Sparkles,
  Lock,
  Zap,
  Star,
  CheckCircle,
  Users,
  Globe
} from 'lucide-react';

export default function Home() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-30" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-md w-full mx-auto">
        {/* Main Card */}
        <Card className="shadow-2xl border-0 bg-white/98 backdrop-blur-xl relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
          
          <CardHeader className="text-center pb-6 relative px-8 pt-8">
            {/* Animated logo container */}
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Shield className="h-8 w-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse opacity-10"></div>
            </div>
            
            <CardTitle className="text-3xl font-bold text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text leading-tight">
              Welcome to SecureAuth
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 font-normal leading-relaxed">
              Your secure authentication system
            </CardDescription>
            
            <div className="flex justify-center gap-2 mt-6">
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 px-3 py-1.5 text-sm font-medium">
                <Sparkles className="h-3 w-3 mr-1.5" />
                Enterprise Grade
              </Badge>
              <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 px-3 py-1.5 text-sm font-medium">
                <CheckCircle className="h-3 w-3 mr-1.5" />
                Secure
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 relative px-8 pb-8">
            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md transition-shadow duration-200">
                <Lock className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-blue-700">Secure</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-md transition-shadow duration-200">
                <Zap className="h-5 w-5 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-green-700">Fast</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-md transition-shadow duration-200">
                <Globe className="h-5 w-5 text-purple-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-purple-700">Global</p>
              </div>
            </div>

            <Separator className="my-6 bg-slate-200" />
            
            <div className="space-y-4">
              <Link href="/register" className="block group">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-lg py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] relative overflow-hidden font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              
              <Link href="/login" className="block group">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full text-lg py-6 h-auto border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 group-hover:scale-[1.02] relative overflow-hidden font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Sign In</span>
                </Button>
              </Link>
            </div>
            
          
            
            <div className="text-center pt-4">
              <p className="text-sm text-slate-500 flex items-center justify-center gap-2 font-medium">
                <Star className="h-4 w-4 text-yellow-500" />
                Trusted by developers worldwide
                <Star className="h-4 w-4 text-yellow-500" />
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Floating elements around the card */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-indigo-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 -right-6 w-3 h-3 bg-purple-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>
    </div>
  );
}