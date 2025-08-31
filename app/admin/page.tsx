import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Eye, TrendingUp, Plus } from "lucide-react"
import { mockBlogOperations } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function AdminDashboard() {
  const allPosts = mockBlogOperations.getAllPosts()
  const publishedPosts = allPosts.filter((post) => post.status === "published")
  const draftPosts = allPosts.filter((post) => post.status === "draft")

  const stats = [
    {
      title: "Total Posts",
      value: allPosts.length,
      icon: FileText,
      description: "All blog posts",
    },
    {
      title: "Published",
      value: publishedPosts.length,
      icon: Eye,
      description: "Live posts",
    },
    {
      title: "Drafts",
      value: draftPosts.length,
      icon: FileText,
      description: "Unpublished posts",
    },
  ]

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your blog.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                  <div
                    className={`w-2 h-2 rounded-full ${post.status === "published" ? "bg-green-500" : "bg-yellow-500"}`}
                  ></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{post.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.status} • {post.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/blog/new">
                  <FileText className="mr-2 h-4 w-4" />
                  Create New Blog Post
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                <Link href="/admin/blog">
                  <Eye className="mr-2 h-4 w-4" />
                  Manage All Posts
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
