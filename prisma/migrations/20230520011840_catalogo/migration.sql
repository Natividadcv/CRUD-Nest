-- CreateTable
CREATE TABLE `plazo` (
    `idPlazo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `codigo` INTEGER NOT NULL,
    `descripcion` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT NOW(),
    `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    `activo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`idPlazo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pais_mh` (
    `idPais` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` INTEGER NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idPais`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `departamento_mh` (
    `idDepartamento` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `codigo` INTEGER NOT NULL,
    `descripcion` VARCHAR(100) NOT NULL,
    `zona` VARCHAR(100) NOT NULL,
    `idPais` INTEGER NOT NULL,

    INDEX `idx_id_pais`(`idPais`),
    PRIMARY KEY (`idDepartamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `municipio_mh` (
    `idMunicipio` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` INTEGER NOT NULL,
    `descripcion` VARCHAR(100) NOT NULL,
    `idDepartamento` INTEGER NOT NULL,

    INDEX `idx_id_departamento`(`idDepartamento`),
    PRIMARY KEY (`idMunicipio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `departamento_mh` ADD CONSTRAINT `departamento_mh_idPais_fkey` FOREIGN KEY (`idPais`) REFERENCES `pais_mh`(`idPais`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `municipio_mh` ADD CONSTRAINT `municipio_mh_idDepartamento_fkey` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento_mh`(`idDepartamento`) ON DELETE RESTRICT ON UPDATE CASCADE;
