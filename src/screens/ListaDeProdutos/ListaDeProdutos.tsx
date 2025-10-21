import {
  BuildingIcon,
  ChevronRightIcon,
  DownloadIcon,
  SearchIcon,
  ShoppingCartIcon,
  SlashIcon,
  TruckIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";

const statsData = [
  {
    label: "Pedidos em aberto",
    value: "3 Ativos",
  },
  {
    label: "Pedidos concluídos",
    value: "82",
  },
  {
    label: "Tempo médio de envio",
    value: "7,3 Dias",
  },
  {
    label: "Pedidos retornados",
    value: "0,8%",
  },
];

const orderItems = [
  {
    id: "#CDR-0002",
    timestamp: "18 abr 17:45 hs",
    status: "Enviar o pacote no dia 22 de abril",
    productImage: "/image-13-2.png",
    productName: "Headset Gamer HyperX Cloud II Core Wireless",
    points: "250 Pontos",
    badges: ["Cliente", "Parceiro", "Fornecedor"],
    expanded: false,
  },
  {
    id: "#CDR-0002",
    timestamp: "18 abr 17:45 hs",
    status: "Enviar o pacote no dia 22 de abril",
    productImage: "/image-13-2.png",
    productName: "Headset Gamer HyperX Cloud II Core Wireless",
    points: "250 Pontos",
    customerName: "Maisa Ferreira silva",
    customerAddress: "Rua das Palmeiras, 123 - Campinas, SP",
    customerEmail: "joao@email.com",
    customerPhone: "(19) 98765-4321",
    customerCPF: "CPF: 123.456.789-00",
    customerRG: "RG: 12.345.678-X",
    expanded: true,
  },
  {
    id: "#CDR-0002",
    timestamp: "18 abr 17:45 hs",
    status: "Enviar o pacote no dia 22 de abril",
    productImage: "/image-13-2.png",
    productName: "Headset Gamer HyperX Cloud II Core Wireless",
    points: "250 Pontos",
    customerName: "Maisa Ferreira silva",
    expanded: false,
  },
];

const navigationItems = [
  { label: "Anúncios", active: false },
  { label: "Resgates", active: true },
  { label: "Parceiros", active: false },
];

const timelineSteps = [
  {
    label: "Pedido confirmado",
    date: "12/08/2025",
    completed: true,
  },
  {
    label: "Em separação",
    date: "14/08/2025",
    completed: true,
  },
  {
    label: "Enviado",
    date: "15/08/2025",
    completed: true,
  },
  {
    label: "Código de rastreio",
    date: "Disponibilizado 16/08/2025",
    completed: true,
  },
  {
    label: "Pedido entregue",
    date: "Pendente",
    completed: false,
  },
];

export const ListaDeProdutos = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-[#0f0f1a] via-[#1a0f2e] to-[#0f0f1a]">
      <header className="flex items-center justify-between px-[52px] py-6 bg-gradient-to-r from-[#1a1a2e]/90 to-[#1a1a2e]/70 backdrop-blur-xl border-b border-[#b76eff]/10 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <img
            className="w-[126px] h-[44.1px] object-cover"
            alt="Logo"
            src="/image-14.png"
          />

          <nav className="inline-flex flex-col items-start gap-2.5 px-2 py-2 bg-[#1a1a2e]/40 backdrop-blur-xl rounded-full border border-[#b76eff]/10">
            <div className="flex items-center gap-2">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto px-6 py-2.5 rounded-full transition-all duration-300 ${
                    item.active
                      ? "bg-gradient-to-r from-[#b76eff] to-[#9b4dff] text-white shadow-xl shadow-[#b76eff]/40"
                      : "text-gray-400 hover:text-white hover:bg-[#2a2a3e]/50"
                  } [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0.50px] leading-6`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        </div>

        <Button
          variant="outline"
          className="h-auto inline-flex items-center gap-2.5 px-3 py-2 rounded-full border border-[#b76eff]/20 bg-[#1a1a2e]/40 backdrop-blur-xl hover:bg-[#2a2a3e]/70 hover:border-[#b76eff]/50 transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b76eff] to-[#9b4dff] shadow-lg shadow-[#b76eff]/30" />
          <ChevronRightIcon className="w-5 h-5 text-gray-300" />
        </Button>
      </header>

      <main className="flex gap-6 p-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col items-start gap-3">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl tracking-tight">
              Resgates
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-base tracking-tight leading-relaxed">
              Acompanhe os pedidos realizados e visualize os detalhes de cada
              troca
            </p>
          </div>

          <div className="inline-flex items-start gap-4">
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-[#b76eff]/10 bg-[#1a1a2e]/30 backdrop-blur-xl hover:border-[#b76eff]/30 transition-all duration-300 cursor-text">
              <SearchIcon className="w-5 h-5 text-[#b76eff]" />
              <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm tracking-tight">
                Pesquisar resgate
              </span>
            </div>

            <Button
              variant="outline"
              className="h-auto inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-[#b76eff]/10 bg-[#1a1a2e]/30 backdrop-blur-xl hover:bg-[#2a2a3e]/50 hover:border-[#b76eff]/30 transition-all duration-300"
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-sm tracking-tight">
                Ultimo mês
              </span>
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            </Button>
          </div>

          <div className="flex items-start gap-4 w-full">
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="flex-1 bg-gradient-to-br from-[#1a1a2e]/60 to-[#2a2a3e]/60 rounded-3xl border border-[#b76eff]/10 hover:border-[#b76eff]/30 transition-all duration-300 backdrop-blur-xl hover:shadow-2xl hover:shadow-[#b76eff]/10"
              >
                <CardContent className="flex flex-col items-start p-6 gap-3">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm tracking-tight">
                    {stat.label}
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl tracking-tight">
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="flex flex-col items-start gap-6 p-6 w-full bg-gradient-to-br from-[#1a1a2e]/60 to-[#2a2a3e]/60 rounded-3xl border border-[#b76eff]/10 backdrop-blur-xl">
            <CardContent className="flex flex-col items-start gap-6 w-full p-0">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#b76eff]/20 to-[#9b4dff]/20 flex items-center justify-center border border-[#b76eff]/20">
                  <ShoppingCartIcon className="w-5 h-5 text-[#b76eff]" />
                </div>
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-tight">
                  Últimos resgates
                </h2>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                {orderItems.map((order, index) => (
                  <div key={index} className="flex flex-col items-start w-full rounded-2xl overflow-hidden border border-[#b76eff]/10 bg-[#1a1a2e]/40 backdrop-blur-xl hover:border-[#b76eff]/20 transition-all duration-300">
                    <div className="flex items-center gap-3 px-6 py-4 w-full bg-[#2a2a3e]/30 border-b border-[#b76eff]/10">
                      <div className="inline-flex items-center gap-3">
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-gray-400 text-sm tracking-tight">
                          {order.id}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-gray-600" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm tracking-tight">
                          {order.timestamp}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 px-6 py-5 w-full hover:bg-[#2a2a3e]/20 transition-all duration-300">
                      <img
                        className="w-6 h-6"
                        alt="Chevron"
                        src={
                          order.expanded
                            ? "/feather-icons---chevron-left-2.svg"
                            : "/feather-icons---chevron-left.svg"
                        }
                      />

                      <div className="inline-flex items-start gap-16 flex-1">
                        <div className="inline-flex flex-col items-start gap-4 flex-1">
                          <Badge className="bg-gradient-to-r from-[#b76eff] to-[#9b4dff] text-white border-0 [font-family:'Inter',Helvetica] font-medium text-xs px-4 py-2 rounded-full h-auto shadow-lg shadow-[#b76eff]/30">
                            {order.status}
                          </Badge>

                          <div className="inline-flex items-center justify-between w-full gap-8">
                            <div className="inline-flex items-center gap-4">
                              <div className="w-14 h-14 rounded-2xl border border-[#b76eff]/20 overflow-hidden bg-[#2a2a3e]/50 flex items-center justify-center">
                                <img
                                  className="w-full h-full object-cover"
                                  alt="Product"
                                  src={order.productImage}
                                />
                              </div>
                              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-tight max-w-xs">
                                {order.productName}
                              </span>
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a3e]/50 rounded-full border border-[#b76eff]/10">
                              <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-sm tracking-tight">
                                {order.points}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          {order.expanded && order.customerName ? (
                            <div className="flex flex-col items-start gap-3 px-4 py-4 bg-[#2a2a3e]/30 backdrop-blur-xl rounded-2xl border border-[#b76eff]/10">
                              <div className="flex items-center gap-2.5 px-4 py-2.5 w-full bg-gradient-to-r from-[#b76eff] to-[#9b4dff] rounded-full shadow-xl shadow-[#b76eff]/20">
                                <div className="inline-flex items-center gap-2">
                                  <UserIcon className="w-4 h-4 text-white" />
                                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-tight">
                                    {order.customerName}
                                  </span>
                                </div>
                              </div>

                              <div className="inline-flex flex-col items-start gap-2 px-2 py-0">
                                {order.customerAddress && (
                                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight leading-relaxed">
                                    {order.customerAddress}
                                  </span>
                                )}
                                {order.customerEmail && (
                                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                                    {order.customerEmail}
                                  </span>
                                )}
                                {order.customerPhone && (
                                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                                    {order.customerPhone}
                                  </span>
                                )}
                                {order.customerCPF && (
                                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                                    {order.customerCPF}
                                  </span>
                                )}
                                {order.customerRG && (
                                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                                    {order.customerRG}
                                  </span>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-start gap-2 px-3 py-3 bg-[#2a2a3e]/30 backdrop-blur-xl rounded-2xl border border-[#b76eff]/10">
                              {order.badges?.map((badge, badgeIndex) => (
                                <div
                                  key={badgeIndex}
                                  className="flex items-center gap-2.5 px-4 py-2.5 w-full bg-gradient-to-r from-[#b76eff] to-[#9b4dff] rounded-full shadow-xl shadow-[#b76eff]/20"
                                >
                                  <div className="inline-flex items-center gap-2">
                                    <UserIcon className="w-4 h-4 text-white" />
                                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-tight">
                                      {badge}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="inline-flex flex-col items-start w-[480px]">
          <div className="flex flex-col w-full items-center gap-5 p-6 bg-gradient-to-br from-[#1a1a2e]/60 to-[#2a2a3e]/60 rounded-t-3xl border-b border-solid border-[#b76eff]/10 backdrop-blur-xl">
            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-3">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-tight">
                  #CDR-0002
                </span>
                <div className="w-1 h-1 rounded-full bg-gray-600" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm tracking-tight">
                  18 abr 17:45 hs
                </span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0 hover:bg-[#b76eff]/20 rounded-full transition-all duration-300">
                <XIcon className="w-5 h-5 text-gray-400 hover:text-white" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex flex-col items-center gap-6 pt-6 pb-8 px-6 w-full bg-gradient-to-br from-[#1a1a2e]/60 to-[#2a2a3e]/60 rounded-b-3xl h-[calc(100vh-200px)] backdrop-blur-xl">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-start justify-center gap-3 px-5 py-4 w-full rounded-2xl border border-solid border-[#b76eff]/10 bg-[#2a2a3e]/30 backdrop-blur-xl">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-xs tracking-tight uppercase">
                    Parceiro
                  </span>
                  <Separator className="w-full bg-[#b76eff]/10" />
                  <div className="inline-flex items-center gap-2">
                    <ShoppingCartIcon className="w-4 h-4 text-white" />
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-tight">
                      CompreAqui
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-3 px-5 py-4 w-full rounded-2xl border border-solid border-[#b76eff]/10 bg-[#2a2a3e]/30 backdrop-blur-xl">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-xs tracking-tight uppercase">
                    Cliente
                  </span>
                  <Separator className="w-full bg-[#b76eff]/10" />
                  <div className="inline-flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-white" />
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-tight">
                      Maísa ferreira
                    </span>
                  </div>
                  <div className="inline-flex items-start gap-6 w-full">
                    <div className="inline-flex flex-col items-start gap-2">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight leading-relaxed">
                        Rua das Palmeiras, 456, Apto 302, Bloco B, Jardim
                        Aurora, São Vicente - SP, 11320-450
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                        maisa@email.com
                      </span>
                    </div>
                    <div className="inline-flex flex-col items-start gap-2">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                        (19) 98765-4321
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                        CPF: 123.456.789-00
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                        RG: 12.345.678-XIcon
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="flex flex-col items-start justify-center gap-3 px-5 py-4 w-full rounded-2xl border border-solid border-[#b76eff]/10 bg-[#2a2a3e]/30 backdrop-blur-xl">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-xs tracking-tight uppercase">
                      Fornecedor
                    </span>
                    <Separator className="w-full bg-[#b76eff]/10" />
                    <div className="inline-flex items-center gap-2">
                      <BuildingIcon className="w-4 h-4 text-white" />
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-tight">
                        Fast shop
                      </span>
                    </div>
                    <div className="inline-flex items-start gap-6 w-full">
                      <div className="inline-flex flex-col items-start justify-center gap-2">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                          CNPJ: 12.345.678/0001-90
                        </span>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                          contato@fastdelivery.com
                        </span>
                      </div>
                      <div className="inline-flex flex-col items-start gap-2">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                          (11) 91234-5678
                        </span>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight">
                          fastdelivery.com.br
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-5 py-4 w-full bg-[#2a2a3e]/30 backdrop-blur-xl rounded-2xl border border-solid border-[#b76eff]/10 hover:border-[#b76eff]/30 transition-all duration-300 cursor-pointer">
                  <div className="inline-flex items-center gap-2.5">
                    <img
                      className="w-6 h-6"
                      alt="File document"
                      src="/file---file-document.svg"
                    />
                    <div className="inline-flex flex-col items-start justify-center gap-1">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-tight">
                        Nota fiscal
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-xs tracking-tight">
                        612Kb
                      </span>
                    </div>
                  </div>
                  <DownloadIcon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex flex-col items-start justify-center gap-4 p-5 w-full rounded-2xl border border-solid border-[#b76eff]/10 bg-[#2a2a3e]/30 backdrop-blur-xl">
                <div className="inline-flex items-center gap-2">
                  <TruckIcon className="w-5 h-5 text-white" />
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-tight">
                    Informações de transporte
                  </span>
                </div>
                <Separator className="w-full bg-[#b76eff]/10" />
                <div className="flex flex-col items-start gap-3 w-full">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-xs tracking-tight">
                    Código de rastreio
                  </span>
                  <div className="flex items-center justify-between px-4 py-3 w-full rounded-xl border border-solid border-[#b76eff]/10 bg-[#1a1a2e]/50">
                    <span className="[font-family:'Montserrat',Helvetica] font-medium text-gray-300 text-sm tracking-tight">
                      PX123456789BR
                    </span>
                    <Badge className="bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 text-[#10b981] border-0 [font-family:'Montserrat',Helvetica] font-medium text-xs px-3 py-1.5 rounded-full h-auto">
                      Enviado
                    </Badge>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-center gap-2">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-xs tracking-tight">
                    Endereço de entrega
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-xs tracking-tight leading-relaxed">
                    Rua das Palmeiras, 456, Apto 302, Bloco B, Jardim Aurora,
                    São Vicente - SP, 11320-450
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-end justify-end gap-5 p-6 w-full bg-gradient-to-br from-[#2a2a3e]/30 to-[#1a1a2e]/30 backdrop-blur-xl rounded-2xl border border-[#b76eff]/10">
                  <div className="flex flex-col items-start gap-4 w-full">
                    {timelineSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 w-full"
                      >
                        <div className="inline-flex flex-col items-center justify-center gap-1">
                          <img
                            className="w-5 h-5"
                            alt="Check circle"
                            src={
                              step.completed
                                ? "/phosphor-icons---checkcircle-1.svg"
                                : "/phosphor-icons---checkcircle.svg"
                            }
                          />
                          {index < timelineSteps.length - 1 && (
                            <img
                              className="w-0.5 h-6 opacity-30"
                              alt="Line"
                              src="/line-91.svg"
                            />
                          )}
                        </div>
                        <div className="inline-flex flex-col gap-1">
                          <span
                            className={`[font-family:'Montserrat',Helvetica] font-medium text-sm tracking-tight ${step.completed ? "text-white" : "text-gray-500"}`}
                          >
                            {step.label}
                          </span>
                          <span
                            className={`[font-family:'Montserrat',Helvetica] font-normal text-xs tracking-tight ${step.completed ? "text-gray-400" : "text-gray-600"}`}
                          >
                            {step.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="flex flex-col items-start gap-3 w-full"
                >
                  <div className="flex items-start gap-3 w-full">
                    <Button
                      variant="outline"
                      className="h-auto flex items-center justify-center gap-2.5 px-4 py-3.5 flex-1 bg-[#2a2a3e]/50 border-[#b76eff]/10 hover:bg-[#3a3a4e]/70 hover:border-[#b76eff]/30 rounded-2xl transition-all duration-300"
                    >
                      <span className="[font-family:'Inter',Helvetica] font-medium text-gray-300 text-sm tracking-tight">
                        Baixar NF-e
                      </span>
                    </Button>

                    <Button className="h-auto flex items-center justify-center gap-2.5 px-4 py-3.5 flex-1 bg-gradient-to-r from-[#b76eff] to-[#9b4dff] rounded-2xl hover:from-[#9b4dff] hover:to-[#7d3dff] shadow-xl shadow-[#b76eff]/30 transition-all duration-300 border-0">
                      <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-sm text-center tracking-tight">
                        Confirmar entrega
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 mt-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full hover:bg-red-400/10 transition-all duration-300 cursor-pointer">
                <SlashIcon className="w-4 h-4 text-red-400" />
                <span className="[font-family:'Inter',Helvetica] font-medium text-red-400 text-sm tracking-tight">
                  Cancelar pedido
                </span>
              </button>
            </div>
          </ScrollArea>
        </aside>
      </main>
    </div>
  );
};
