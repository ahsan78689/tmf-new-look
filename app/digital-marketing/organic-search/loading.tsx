import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function OrganicSearchLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-8" />
            <Skeleton className="h-16 w-full max-w-4xl mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-4" />
            <Skeleton className="h-6 w-3/4 max-w-2xl mx-auto mb-10" />
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Skeleton className="h-14 w-48" />
              <Skeleton className="h-14 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="h-16 w-16 rounded-2xl mx-auto mb-4" />
                <Skeleton className="h-8 w-20 mx-auto mb-2" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-lg mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="pb-6">
                  <div className="flex items-start mb-6">
                    <Skeleton className="h-14 w-14 rounded-2xl mr-4" />
                    <div className="flex-1">
                      <Skeleton className="h-6 w-32 mb-2" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {[...Array(4)].map((_, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Skeleton className="h-4 w-4 rounded-full mr-3" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section Skeleton */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Skeleton className="h-12 w-80 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-lg mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Skeleton className="h-16 w-16 rounded-2xl mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-lg mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-lg mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div>
                      <Skeleton className="h-5 w-24 mb-1" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-12 w-96 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-10 bg-white/20" />
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Skeleton className="h-14 w-48 bg-white/20" />
              <Skeleton className="h-14 w-40 bg-white/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
