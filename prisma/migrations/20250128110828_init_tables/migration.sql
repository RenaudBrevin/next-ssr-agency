-- CreateTable
CREATE TABLE "ProjectDetails" (
    "id" SERIAL NOT NULL,
    "context" TEXT NOT NULL,
    "objectives" TEXT NOT NULL,
    "technologies" TEXT[],
    "results" TEXT NOT NULL,
    "imagesUrl" TEXT[],
    "projectId" INTEGER,

    CONSTRAINT "ProjectDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectDetails_projectId_key" ON "ProjectDetails"("projectId");

-- AddForeignKey
ALTER TABLE "ProjectDetails" ADD CONSTRAINT "ProjectDetails_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
