-- CreateEnum
CREATE TYPE "Age" AS ENUM ('filhote', 'adulta', 'velhice');

-- CreateEnum
CREATE TYPE "Body" AS ENUM ('pequeno', 'medio', 'grande');

-- CreateEnum
CREATE TYPE "Independence" AS ENUM ('baixa', 'media', 'alta');

-- CreateEnum
CREATE TYPE "Energy" AS ENUM ('baixa', 'media', 'alta');

-- CreateEnum
CREATE TYPE "Env" AS ENUM ('amplo', 'fechado');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orgs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "whatsapp" DECIMAL(65,30) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "petId" TEXT NOT NULL,

    CONSTRAINT "orgs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "age" "Age" NOT NULL DEFAULT 'filhote',
    "body" "Body" NOT NULL DEFAULT 'pequeno',
    "energy" "Energy" NOT NULL DEFAULT 'baixa',
    "independence" "Independence" NOT NULL DEFAULT 'baixa',
    "env" "Env" NOT NULL DEFAULT 'amplo',
    "image" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "orgs_email_key" ON "orgs"("email");

-- AddForeignKey
ALTER TABLE "orgs" ADD CONSTRAINT "orgs_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
