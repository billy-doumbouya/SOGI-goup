'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'sonner'
import SogipLogo from '@/components/icons/SogipLogo'

const schema = yup.object({
  email:    yup.string().email('Email invalide').required('Email requis'),
  password: yup.string().min(6, 'Mot de passe trop court').required('Mot de passe requis'),
})

export default function LoginPage() {
  const router   = useRouter()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    const res = await signIn('credentials', {
      email:    data.email,
      password: data.password,
      redirect: false,
    })
    setLoading(false)

    if (res?.error) {
      toast.error('Identifiants incorrects. Veuillez réessayer.')
    } else {
      toast.success('Connexion réussie.')
      router.push('/dashboard')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.06) 0%, #0A0A0E 60%)',
      }}
    >
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <SogipLogo className="h-12 w-auto mx-auto mb-2" />
          <p className="text-xs tracking-widest uppercase" style={{ color: '#4A4A55' }}>
            Espace Administrateur
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: '#111118',
            border: '1px solid rgba(201,168,76,0.15)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          }}
        >
          <h1 className="font-display text-2xl mb-1" style={{ color: '#F0EDE8' }}>
            Connexion
          </h1>
          <p className="text-sm mb-8" style={{ color: '#8A8A8A' }}>
            Accédez au tableau de bord SOGIP Group.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-5">
              <label className="label">Email</label>
              <input
                {...register('email')}
                type="email"
                placeholder="admin@sogipgroup.com"
                className={`input ${errors.email ? 'error' : ''}`}
                autoComplete="email"
              />
              {errors.email && <p className="error-msg">{errors.email.message}</p>}
            </div>

            <div className="mb-7">
              <label className="label">Mot de passe</label>
              <input
                {...register('password')}
                type="password"
                placeholder="••••••••"
                className={`input ${errors.password ? 'error' : ''}`}
                autoComplete="current-password"
              />
              {errors.password && <p className="error-msg">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full justify-center"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? (
                <>
                  <SpinnerIcon />
                  Connexion...
                </>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: '#4A4A55' }}>
          Vision · Innovation · Réalisation
        </p>
      </div>
    </div>
  )
}

function SpinnerIcon() {
  return (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
    </svg>
  )
}
