﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using server.Data;

namespace server.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220417211551_CadastroCliente003")]
    partial class CadastroCliente003
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("server.Models.Entity.Cliente", b =>
                {
                    b.Property<int>("idCliente")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("endereco")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("facebook")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("instagram")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("linkedin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("logo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomeCliente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomeComercial")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("snAtivo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("telefone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("twitter")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("urlCliente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("usuario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("whatsApp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("youtube")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idCliente");

                    b.ToTable("Clientes");
                });
#pragma warning restore 612, 618
        }
    }
}
