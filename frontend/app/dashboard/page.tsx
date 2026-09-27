import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import ProjectCard from "@/components/dashboard/ProjectCard";
import RecentReviews from "@/components/dashboard/RecentReviews";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <main className="p-8">
          {/* Welcome */}
          <section className="mb-8">
            <h1 className="text-2xl font-bold">Welcome to CodeLens </h1>

            <p className="mt-2 text-sm text-slate-500">
              Analyze your code, find issues, and improve your projects with
              AI-powered code reviews.
            </p>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Projects"
              value="3"
              description="Active projects"
              icon="▣"
            />

            <StatCard
              title="Files Analyzed"
              value="24"
              description="Across all projects"
              icon="□"
            />

            <StatCard
              title="Reviews"
              value="12"
              description="AI reviews completed"
              icon="◈"
            />

            <StatCard
              title="Issues Found"
              value="31"
              description="Across all reviews"
              icon="!"
            />
          </section>

          {/* Projects */}
          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Your Projects</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Manage and review your codebases
                </p>
              </div>

              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                + New Project
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <ProjectCard
                name="CodeLens"
                description="AI-powered code review assistant for developers."
                files={12}
                reviews={6}
              />

              <ProjectCard
                name="Portfolio"
                description="Personal developer portfolio and project showcase."
                files={8}
                reviews={4}
              />

              <ProjectCard
                name="Revise AI"
                description="AI-powered student exam and interview preparation platform."
                files={4}
                reviews={2}
              />
            </div>
          </section>

          {/* Recent Reviews */}
          <section className="mt-10">
            <RecentReviews />
          </section>
        </main>
      </div>
    </div>
  );
}
