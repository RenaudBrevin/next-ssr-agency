-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectUrl" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
